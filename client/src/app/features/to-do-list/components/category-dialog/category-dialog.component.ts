import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogMode, ICategoryDialogData } from '../../models';

@Component({
    selector: 'wp-category-dialog',
    templateUrl: './category-dialog.component.html',
    styleUrls: ['./category-dialog.component.scss'],
})
export class CategoryDialogComponent implements OnInit {
    title = '';
    confirmButtonLabel = '';

    constructor(
        public dialogRef: MatDialogRef<CategoryDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ICategoryDialogData
    ) {}

    ngOnInit(): void {
        this.title =
            this.data.mode === DialogMode.Creation
                ? 'toDoList.newCategoryTitle'
                : 'toDoList.categoryEditionTitle';

        this.confirmButtonLabel =
            this.data.mode === DialogMode.Creation ? 'app.add' : 'app.save';
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }
}
