import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/core/store/state/app.state';
import {
    changeTaskExpansionState,
    deleteTask,
    editTask,
} from 'src/app/core/store/task';
import { DialogMode } from 'src/app/shared/dialogs';
import { ITask } from 'src/app/shared/models/tasks.model';
import { ITaskDialogData } from '../../models';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
    selector: 'wp-task-table-element',
    templateUrl: './task-table-element.component.html',
    styleUrls: ['./task-table-element.component.scss'],
})
export class TaskTableElementComponent implements OnInit {
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
                this._dispatchEditTaskAction(result);
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

    changeFinishStatus() {
        this._dispatchEditTaskAction(this.task);
    }

    private _dispatchEditTaskAction(task: ITask) {
        this._store.dispatch(
            editTask({
                payload: {
                    categoryId: this.categoryId,
                    task: { ...task },
                },
            })
        );
    }
}
