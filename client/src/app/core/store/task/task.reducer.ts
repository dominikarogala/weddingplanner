import { createReducer, on } from '@ngrx/store';

import { ITaskDTO } from 'src/app/shared/models';
import { loadTasksSuccess, initialTaskState } from '.';
import { addNewTaskSuccess } from './task.action';
import { ITaskState } from './task.state';

export const taskReducer = createReducer(
    initialTaskState,
    on(loadTasksSuccess, (state, action) => ({
        ...state,
        categories: [...state.categories, ...action.payload],
    })),
    on(addNewTaskSuccess, (state, action) => ({ ...state }))
);
