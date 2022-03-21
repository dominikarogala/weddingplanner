import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap } from 'rxjs';

import { addNewTask, addNewTaskSuccess, loadTasks, loadTasksSuccess } from '.';
import { addNewCategory, addNewCategorySuccess } from './task.action';
import { TaskService } from './task.service';

@Injectable()
export class TaskEffects {
    constructor(private _actions$: Actions, private service: TaskService) {}

    loadTasks = createEffect(() => {
        return this._actions$.pipe(
            ofType(loadTasks),
            switchMap(() => {
                return this.service.getTasks().pipe(
                    map((tasks) => loadTasksSuccess({ payload: [...tasks] })),
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
}
