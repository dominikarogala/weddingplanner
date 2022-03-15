import { createAction, props } from '@ngrx/store';

import { ICategory, ITask, ITaskDTO } from 'src/app/shared/models';

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction(
    '[Task] Load Tasks Success',
    props<{ payload: ICategory[] }>()
);
export const addNewTask = createAction(
    '[Task] Add New Task',
    props<{ payload: ITaskDTO }>()
);
export const addNewTaskSuccess = createAction(
    '[Task] Add New Task Success',
    props<{ payload: ITask }>()
);
