import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PdfService } from 'src/app/shared/services/pdf.service';

import { AppState } from 'src/app/core/store/state/app.state';
import { addNewCategory } from 'src/app/core/store/task';
import { ICategory } from 'src/app/shared/models/tasks.model';

import { DialogMode, ICategoryDialogData } from '../../models';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';

@Component({
    selector: 'wp-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    @Input() categories: ICategory[] = [];

    isExpanded = false;

    constructor(
        private _dialog: MatDialog,
        private _store: Store<AppState>,
        private _pdfService: PdfService
    ) {}

    ngOnInit(): void {}

    openNewCategoryDialog(): void {
        const dialogData: ICategoryDialogData = {
            mode: DialogMode.Creation,
            categoryName: '',
        };

        const dialogRef = this._dialog.open(CategoryDialogComponent, {
            width: '30rem',
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((categoryName: string) => {
            if (!!categoryName) {
                this._store.dispatch(
                    addNewCategory({ payload: { categoryName } })
                );
            }
        });
    }

    identifierFn(index: number, item: any): string {
        return item.id;
    }

    downloadTasksList(): void {
        this._pdfService.downloadTasksList().subscribe((data) => {
            const fileURL = URL.createObjectURL(data);
            window.open(fileURL, '_blank');
        });
    }
}
