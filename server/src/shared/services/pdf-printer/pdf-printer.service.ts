import { Injectable } from '@nestjs/common';

import * as PDFDocument from 'pdfkit';
import { TaskService } from 'src/task/task.service';

interface ITable {
    headers: string[];
    rows: string[][];
}

interface IOptions {
    columnSpacing?: number;
    rowSpacing?: number;
    width?: number;
}

interface ITableCords {
    x: number;
    y: number;
}

@Injectable()
export class PdfPrinterService {
    private _usableWidth: number;
    private _columnCount: number;
    private _columnContainerWidth: number;
    private _columnWidth: number;
    private _columnSpacing: number;
    private _rowSpacing: number;
    private _maxY: number;
    private _doc: PDFDocument;

    private _rowBottomY = 0;

    constructor(private readonly _taskService: TaskService) {}

    async generatePDF(): Promise<PDFDocument> {
        const categories = await this._taskService.getAllTasks();
        this._doc = new PDFDocument();
        let startY = this._doc.y;

        categories.forEach(category => {
            console.log(startY);
            const rows = [];

            category.tasks.forEach(task => {
                rows.push([task.isFinished ? 'TAK' : 'NIE', task.name, new Date(task.endDate).toLocaleDateString(), task.notes]);
            });

            const table = {
                headers: ['Wykonano', 'Nazwa zadania', 'Planowana data ukonczenia', 'Notatki'],
                rows: rows,
            };

            this._doc.fill('#673ab7').fontSize(18).text(category.name, 50, startY).fillColor('black').moveDown();

            this._createTable(table, { x: 50, y: startY + 30 }, { width: 500 });

            startY = this._doc.y + 30;
        });

        this._doc.end();

        return this._doc;
    }

    private _createTable(table: ITable, tableCords: ITableCords, options: IOptions = null) {
        this._prepareTableSettings(table, options);

        this._doc.on('pageAdded', () => {
            tableCords.y = this._doc.page.margins.top;
            this._rowBottomY = 0;
        });

        // Check to have enough room for header and first rows
        if (tableCords.y + 3 * this._computeRowHeight(table.headers) > this._maxY) {
            this._doc.addPage();
        }

        this._printTable(table, tableCords);

        this._doc.x = tableCords.x;
        this._doc.moveDown();
    }

    private _printTable(table: ITable, tableCords: ITableCords) {
        this._printHeader(table, tableCords);

        table.rows.forEach(row => {
            this._printRow(row, tableCords);
        });
    }

    private _printHeader(table: ITable, tableCords: ITableCords) {
        this._printCustomTableRow(table.headers, tableCords);
        this._rowBottomY = Math.max(tableCords.y + this._computeRowHeight(table.headers), this._rowBottomY); // Refresh the y coordinate of the bottom of the headers row
        this._drawLine(tableCords.x, 2, 0.8);
    }

    private _printRow(row: string[], tableCords: ITableCords) {
        const rowHeight = this._computeRowHeight(row);

        // Switch to next page if we cannot go any further because the space is over.
        // For safety, consider 3 rows margin instead of just one
        if (tableCords.y + 3 * rowHeight < this._maxY) {
            tableCords.y = this._rowBottomY + this._rowSpacing;
        } else {
            this._doc.addPage();
        }

        this._printCustomTableRow(row, tableCords);
        this._rowBottomY = Math.max(tableCords.y + rowHeight, this._rowBottomY); // Refresh the y coordinate of the bottom of this row
        this._drawLine(tableCords.x, 1, 0.3);
    }

    private _printCustomTableRow(tableRow: string[], tableCords: ITableCords) {
        tableRow.forEach((cell, i) => {
            this._doc.fontSize(12).text(cell, tableCords.x + i * this._columnContainerWidth, tableCords.y, {
                width: this._columnWidth,
                align: 'left',
            });
        });
    }

    private _drawLine(startX: number, lineWidth = 1, opacity = 1): void {
        this._doc
            .moveTo(startX, this._rowBottomY - this._rowSpacing * 0.5)
            .lineTo(startX + this._usableWidth, this._rowBottomY - this._rowSpacing * 0.5)
            .opacity(opacity)
            .lineWidth(lineWidth)
            .stroke()
            .opacity(1);
    }

    private _computeRowHeight(row: string[]): number {
        let result = 0;

        row.forEach(cell => {
            const cellHeight = this._doc.heightOfString(cell, {
                width: this._columnWidth,
                align: 'left',
            });
            result = Math.max(result, cellHeight);
        });

        return result + this._rowSpacing;
    }

    private _prepareTableSettings(table: ITable, options: IOptions) {
        this._columnCount = table.headers.length;
        this._columnSpacing = options?.columnSpacing ?? 15;
        this._rowSpacing = options?.rowSpacing ?? 5;
        this._usableWidth = options?.width || this._doc.page.width - this._doc.page.margins.left - this._doc.page.margins.right;

        this._columnContainerWidth = this._usableWidth / this._columnCount;
        this._columnWidth = this._columnContainerWidth - this._columnSpacing;
        this._maxY = this._doc.page.height - this._doc.page.margins.bottom;
    }
}
