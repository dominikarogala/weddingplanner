import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, EMPTY, exhaustMap, map, switchMap } from 'rxjs';

import { addNewTask, addNewTaskSuccess, loadTasks, loadTasksSuccess } from '.';
import {
    addNewCategory,
    addNewCategorySuccess,
    deleteCategory,
    deleteCategorySuccess,
    deleteTask,
    deleteTaskSuccess,
    editCategory,
    editCategorySuccess,
    editTask,
    editTaskSuccess,
} from './task.action';
import { TaskService } from './task.service';

@Injectable()
export class TaskEffects {
    constructor(
        private _actions$: Actions,
        private _service: TaskService,
        private _toastr: ToastrService,
        private _translate: TranslateService
    ) {}

    loadTasks = createEffect(() => {
        return this._actions$.pipe(
            ofType(loadTasks),
            switchMap(() => {
                return this._service.getTasks().pipe(
                    map((tasks) =>
                        loadTasksSuccess({
                            payload: tasks.map((categories) => ({
                                ...categories,
                                isOpened: false,
                                tasks: categories.tasks.map((task) => ({
                                    ...task,
                                    isOpened: false,
                                })),
                            })),
                        })
                    ),
                    catchError((error) => {
                        this._toastr.error(
                            this._translate.instant('toaster.loadTasksError')
                        );
                        return EMPTY;
                    })
                );
            })
        );
    });

    createNewTask = createEffect(() => {
        return this._actions$.pipe(
            ofType(addNewTask),
            switchMap((action) => {
                return this._service.addNewTask(action.payload).pipe(
                    map((result) =>
                        addNewTaskSuccess({
                            payload: { ...action.payload.task, id: result },
                            categoryId: action.payload.categoryId,
                        })
                    ),
                    catchError((error) => {
                        this._toastr.error(
                            this._translate.instant('toaster.createTaskError')
                        );
                        return EMPTY;
                    })
                );
            })
        );
    });

    createNewCategory = createEffect(() => {
        return this._actions$.pipe(
            ofType(addNewCategory),
            switchMap((action) => {
                return this._service
                    .addNewCategory(action.payload.categoryName)
                    .pipe(
                        map((result) =>
                            addNewCategorySuccess({
                                payload: {
                                    categoryId: result,
                                    categoryName: action.payload.categoryName,
                                },
                            })
                        ),
                        catchError((error) => {
                            this._toastr.error(
                                this._translate.instant(
                                    'toaster.createCategoryError'
                                )
                            );
                            return EMPTY;
                        })
                    );
            })
        );
    });

    deleteTask = createEffect(() => {
        return this._actions$.pipe(
            ofType(deleteTask),
            exhaustMap((action) => {
                return this._service
                    .deleteTask(
                        action.payload.categoryId,
                        action.payload.taskId
                    )
                    .pipe(
                        map((result) =>
                            deleteTaskSuccess({
                                payload: {
                                    categoryId: action.payload.categoryId,
                                    taskId: action.payload.taskId,
                                },
                            })
                        ),
                        catchError((error) => {
                            this._toastr.error(
                                this._translate.instant(
                                    'toaster.deleteTaskError'
                                )
                            );
                            return EMPTY;
                        })
                    );
            })
        );
    });

    deleteCategory = createEffect(() => {
        return this._actions$.pipe(
            ofType(deleteCategory),
            exhaustMap((action) => {
                return this._service
                    .deleteCategory(action.payload.categoryId)
                    .pipe(
                        map((result) =>
                            deleteCategorySuccess({
                                payload: {
                                    categoryId: action.payload.categoryId,
                                },
                            })
                        ),
                        catchError((error) => {
                            this._toastr.error(
                                this._translate.instant(
                                    'toaster.deleteCategoryError'
                                )
                            );
                            return EMPTY;
                        })
                    );
            })
        );
    });

    editTask = createEffect(() => {
        return this._actions$.pipe(
            ofType(editTask),
            exhaustMap((action) => {
                return this._service
                    .editTask(action.payload.categoryId, action.payload.task)
                    .pipe(
                        map((result) =>
                            editTaskSuccess({
                                payload: {
                                    categoryId: action.payload.categoryId,
                                    task: action.payload.task,
                                },
                            })
                        ),
                        catchError((error) => {
                            this._toastr.error(
                                this._translate.instant('toaster.editTaskError')
                            );
                            return EMPTY;
                        })
                    );
            })
        );
    });

    editCategory = createEffect(() => {
        return this._actions$.pipe(
            ofType(editCategory),
            switchMap((action) => {
                return this._service
                    .editCategory(
                        action.payload.categoryId,
                        action.payload.categoryName
                    )
                    .pipe(
                        map((result) =>
                            editCategorySuccess({
                                payload: {
                                    categoryId: action.payload.categoryId,
                                    categoryName: action.payload.categoryName,
                                },
                            })
                        ),
                        catchError((error) => {
                            this._toastr.error(
                                this._translate.instant(
                                    'toaster.editCategoryError'
                                )
                            );
                            return EMPTY;
                        })
                    );
            })
        );
    });
}
