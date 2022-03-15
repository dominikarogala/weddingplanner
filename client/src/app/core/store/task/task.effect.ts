import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, of, switchMap, tap } from 'rxjs';
import { ITaskDTO } from 'src/app/shared/models';

import { addNewTask, addNewTaskSuccess, loadTasks, loadTasksSuccess } from '.';
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

    addNewTask = createEffect(() => {
        return this._actions$.pipe(
            ofType(addNewTask),
            switchMap((action) => {
                return this.service.addNewTask(action.payload).pipe(
                    map((result) =>
                        addNewTaskSuccess({
                            payload: { ...action.payload.task, id: result },
                        })
                    ),
                    catchError((error) => EMPTY)
                );
            })
        );
    });
}
