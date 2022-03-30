import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/state/app.state';
import {
    addNewTask,
    changeCategoryExpansionState,
    deleteTask,
} from 'src/app/core/store/task';

import { ICategory, ITask, Task } from 'src/app/shared/models/tasks.model';
import { ITaskDialogData, DialogMode } from '../../models/dialog.model';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
    selector: 'wp-table-category',
    templateUrl: './table-category.component.html',
    styleUrls: ['./table-category.component.scss'],
})
export class TableCategoryComponent implements OnInit {
    @Input() set category(value: ICategory) {
        this._category = value;
        this.progress = this._calculateProgress();
    }
    get category(): ICategory {
        return this._category;
    }
    private _category: ICategory;

    progress = 0;

    constructor(private _dialog: MatDialog, private _store: Store<AppState>) {}

    ngOnInit(): void {}

    onCategoryPanelClick(isCategoryOpened: boolean): void {
        this._store.dispatch(
            changeCategoryExpansionState({
                payload: { categoryId: this.category.id, isCategoryOpened },
            })
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
