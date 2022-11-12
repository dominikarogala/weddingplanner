import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ITaskDialogData, DialogMode } from '../../models/dialog.model';

@Component({
    selector: 'wp-task-dialog',
    templateUrl: './task-dialog.component.html',
    styleUrls: ['./task-dialog.component.scss'],
})
export class TaskDialogComponent implements OnInit {
    title = '';
    confirmButtonLabel = '';

    constructor(
        public dialogRef: MatDialogRef<TaskDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ITaskDialogData
    ) {}

    ngOnInit(): void {
        this.title =
            this.data.mode === DialogMode.Creation
                ? 'toDoList.newTaskTitle'
                : 'toDoList.taskEditionTitle';

        this.confirmButtonLabel =
            this.data.mode === DialogMode.Creation ? 'app.add' : 'app.save';
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }
}
