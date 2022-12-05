import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/core/store/state/app.state';
import {
    addNewCategory,
    loadTasks,
    selectTasks,
} from 'src/app/core/store/task';
import { PdfService } from 'src/app/shared/services/pdf.service';
import { CategoryDialogComponent } from './components';
import { DialogMode, ICategoryDialogData } from './models';

@Component({
    selector: 'wp-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
    categories$ = this._store.select(selectTasks);

    constructor(
        private _store: Store<AppState>,
        private _dialog: MatDialog,
        private _pdfService: PdfService
    ) {}

    ngOnInit(): void {
        this._store.dispatch(loadTasks());
    }

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

    downloadTasksList(): void {
        this._pdfService.downloadTasksList().subscribe((data) => {
            const fileURL = URL.createObjectURL(data);
            window.open(fileURL, '_blank');
        });
    }

    identifierFn(index: number, item: any): string {
        return item.id;
    }
}
