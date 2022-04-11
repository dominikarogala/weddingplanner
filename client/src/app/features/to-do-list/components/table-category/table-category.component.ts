import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/state/app.state';
import {
    addNewTask,
    changeCategoryExpansionState,
    deleteCategory,
    deleteTask,
    editCategory,
} from 'src/app/core/store/task';

import { ICategory, ITask, Task } from 'src/app/shared/models/tasks.model';
import {
    ITaskDialogData,
    DialogMode,
    ICategoryDialogData,
} from '../../models/dialog.model';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';
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
