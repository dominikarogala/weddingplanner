import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/state/app.state';
import { addNewTask, deleteTask } from 'src/app/core/store/task';

import { ICategory, ITask, Task } from 'src/app/shared/models/tasks.model';
import { ITaskDialogData, DialogMode } from '../../models/dialog.model';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
    selector: 'wp-table-category',
    templateUrl: './table-category.component.html',
    styleUrls: ['./table-category.component.scss'],
})
export class TableCategoryComponent implements OnInit {
    @Input() category!: ICategory;

    panelOpenState = false;
    progress = 0;

    constructor(private _dialog: MatDialog, private _store: Store<AppState>) {}

    ngOnInit(): void {
        this.progress = this._calculateProgress();
    }

    onDeleteTask(taskId: string): void {
        this._store.dispatch(
            deleteTask({ payload: { categoryId: this.category.id, taskId } })
        );
    }

    openDialog(): void {
        const dialogData: ITaskDialogData = {
            mode: DialogMode.Creation,
            task: new Task(),
        };

        const dialogRef = this._dialog.open(TaskDialogComponent, {
            width: '30rem',
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((result: ITask) => {
            if (!!result) {
                this._store.dispatch(
                    addNewTask({
                        payload: {
                            categoryId: this.category.id,
                            task: { ...result },
                        },
                    })
                );
            }
        });
    }

    private _calculateProgress(): number {
        if (this.category.tasks.length < 1) {
            return 0;
        }

        const finishedTasks = this.category.tasks.filter(
            (task) => task.isFinished
        );

        return (finishedTasks.length / this.category.tasks.length) * 100;
    }
}
