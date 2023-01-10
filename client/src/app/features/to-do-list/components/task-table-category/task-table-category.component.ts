import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/state/app.state';
import {
    addNewTask,
    changeCategoryExpansionState,
    deleteCategory,
    editCategory,
} from 'src/app/core/store/task';

import { ITaskCategory, ITask, Task } from 'src/app/shared/models/tasks.model';
import { ITaskDialogData } from '../../models/dialog.model';
import { CategoryDialogComponent } from '../../../../shared/dialogs/category-dialog/category-dialog.component';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { DialogMode, ICategoryDialogData } from 'src/app/shared/dialogs';

@Component({
    selector: 'wp-task-table-category',
    templateUrl: './task-table-category.component.html',
    styleUrls: ['./task-table-category.component.scss'],
})
export class TaskTableCategoryComponent implements OnInit {
    @Input() set category(value: ITaskCategory) {
        this._category = value;
        this.finishedTasksAmount = this._calculatefinishedTasksAmount();
    }
    get category(): ITaskCategory {
        return this._category;
    }
    private _category: ITaskCategory;

    finishedTasksAmount = 0;

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

    deleteCategory(): void {
        this._store.dispatch(
            deleteCategory({ payload: { categoryId: this.category.id } })
        );
    }

    editCategory(): void {
        const dialogData: ICategoryDialogData = {
            mode: DialogMode.Edition,
            categoryName: this.category.name,
        };

        const dialogRef = this._dialog.open(CategoryDialogComponent, {
            width: '30rem',
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((categoryName: string) => {
            if (!!categoryName) {
                this._store.dispatch(
                    editCategory({
                        payload: { categoryId: this.category.id, categoryName },
                    })
                );
            }
        });
    }

    private _calculatefinishedTasksAmount(): number {
        if (this.category.tasks.length < 1) {
            return 0;
        }

        const finishedTasks = this.category.tasks.filter(
            (task) => task.isFinished
        );

        return finishedTasks.length;
    }
}
