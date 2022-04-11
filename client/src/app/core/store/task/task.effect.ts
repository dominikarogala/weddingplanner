import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
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
    constructor(private _actions$: Actions, private service: TaskService) {}

    loadTasks = createEffect(() => {
        return this._actions$.pipe(
            ofType(loadTasks),
            switchMap(() => {
                return this.service.getTasks().pipe(
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
                    catchError((error) => EMPTY)
                );
            })
        );
    });

    createNewTask = createEffect(() => {
        return this._actions$.pipe(
            ofType(addNewTask),
            switchMap((action) => {
                return this.service.addNewTask(action.payload).pipe(
                    map((result) =>
                        addNewTaskSuccess({
                            payload: { ...action.payload.task, id: result },
                            categoryId: action.payload.categoryId,
                        })
                    ),
                    catchError((error) => EMPTY)
                );
            })
        );
    });

    createNewCategory = createEffect(() => {
        return this._actions$.pipe(
            ofType(addNewCategory),
            switchMap((action) => {
                return this.service
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
                        catchError((error) => EMPTY)
                    );
            })
        );
    });

    deleteTask = createEffect(() => {
        return this._actions$.pipe(
            ofType(deleteTask),
            exhaustMap((action) => {
                return this.service
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
                        catchError((error) => EMPTY)
                    );
            })
        );
    });

    deleteCategory = createEffect(() => {
        return this._actions$.pipe(
            ofType(deleteCategory),
            exhaustMap((action) => {
                return this.service
                    .deleteCategory(action.payload.categoryId)
                    .pipe(
                        map((result) =>
                            deleteCategorySuccess({
                                payload: {
                                    categoryId: action.payload.categoryId,
                                },
                            })
                        ),
                        catchError((error) => EMPTY)
                    );
            })
        );
    });

    editTask = createEffect(() => {
        return this._actions$.pipe(
            ofType(editTask),
            exhaustMap((action) => {
                return this.service
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
                        catchError((error) => EMPTY)
                    );
            })
        );
    });

    editCategory = createEffect(() => {
        return this._actions$.pipe(
            ofType(editCategory),
            switchMap((action) => {
                return this.service
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
                        catchError((error) => EMPTY)
                    );
            })
        );
    });
}
