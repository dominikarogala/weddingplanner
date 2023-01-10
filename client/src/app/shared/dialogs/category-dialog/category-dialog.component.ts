import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Categories } from 'src/app/shared/constants';
import { SharedModule } from '../../shared.module';
import { DialogMode, ICategoryDialogData } from './category-dialog.model';

@Component({
    selector: 'wp-category-dialog',
    templateUrl: './category-dialog.component.html',
    styleUrls: ['./category-dialog.component.scss'],
    standalone: true,
    imports: [SharedModule],
})
export class CategoryDialogComponent implements OnInit {
    title = '';
    confirmButtonLabel = '';
    options = Categories;

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
