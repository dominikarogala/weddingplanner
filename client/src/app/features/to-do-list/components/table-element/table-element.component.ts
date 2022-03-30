import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/core/store/state/app.state';
import { changeTaskExpansionState, deleteTask } from 'src/app/core/store/task';
import { ITask } from 'src/app/shared/models/tasks.model';
import { ITaskDialogData, DialogMode } from '../../models/dialog.model';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
    selector: 'wp-table-element',
    templateUrl: './table-element.component.html',
    styleUrls: ['./table-element.component.scss'],
})
export class TableElementComponent implements OnInit {
    @Input() task!: ITask;
    @Input() categoryId = '';

    constructor(private _dialog: MatDialog, private _store: Store<AppState>) {}

    ngOnInit(): void {}

    editTask(): void {
        this.openDialog();
    }

    openDialog(): void {
        const dialogData: ITaskDialogData = {
            mode: DialogMode.Edition,
            task: { ...this.task },
        };

        const dialogRef = this._dialog.open(TaskDialogComponent, {
            width: '30rem',
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((result: ITask) => {
            if (!!result) {
                this.task = { ...result };
            }
        });
    }

    onTaskPanelClick(isTaskOpened: boolean): void {
        this._store.dispatch(
            changeTaskExpansionState({
                payload: {
                    categoryId: this.categoryId,
                    taskId: this.task.id,
                    isTaskOpened,
                },
            })
        );
    }

    deleteTask(): void {
        this._store.dispatch(
            deleteTask({
                payload: { categoryId: this.categoryId, taskId: this.task.id },
            })
        );
    }
}
