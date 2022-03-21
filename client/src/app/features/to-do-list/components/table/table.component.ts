import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

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

    constructor(private _dialog: MatDialog, private _store: Store<AppState>) {}

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
            this._store.dispatch(addNewCategory({ payload: { categoryName } }));
        });
    }
}
