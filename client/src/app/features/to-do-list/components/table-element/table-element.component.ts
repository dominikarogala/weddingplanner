import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITask } from 'src/app/features/to-do-list/models/tasks.model';
import { ITaskDialogData, TaskDialogMode } from '../../models/dialog.model';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
    selector: 'wp-table-element',
    templateUrl: './table-element.component.html',
    styleUrls: ['./table-element.component.scss'],
})
export class TableElementComponent implements OnInit {
    @Input() task!: ITask;

    @Output() deleteTask: EventEmitter<string> = new EventEmitter();

    isDescriptionVisible = false;

    constructor(private _dialog: MatDialog) {}

    ngOnInit(): void {}

    editTask(): void {
        this.openDialog();
    }

    openDialog(): void {
        const dialogData: ITaskDialogData = {
            mode: TaskDialogMode.Edition,
            task: { ...this.task },
        };

        const dialogRef = this._dialog.open(TaskDialogComponent, {
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((result: ITask) => {
            if (!!result) {
                this.task = { ...result };
            }
        });
    }
}
