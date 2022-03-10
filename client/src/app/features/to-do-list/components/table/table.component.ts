import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ICategory } from 'src/app/features/to-do-list/models/tasks.model';
import { DialogMode, ICategoryDialogData } from '../../models';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';

@Component({
    selector: 'wp-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    @Input() categories: ICategory[] = [];

    constructor(private _dialog: MatDialog) {}

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

        dialogRef.afterClosed().subscribe((result: ICategory) => {
            console.log(result);
        });
    }
}
