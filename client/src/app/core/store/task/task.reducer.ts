import { createReducer, on } from '@ngrx/store';

import { loadTasksSuccess, initialTaskState } from '.';
import { addNewCategorySuccess, addNewTaskSuccess } from './task.action';

export const taskReducer = createReducer(
    initialTaskState,
    on(loadTasksSuccess, (state, action) => ({
        ...state,
        categories: [...state.categories, ...action.payload],
    })),
    on(addNewTaskSuccess, (state, action) => ({
        ...state,
        categories: state.categories.map((category) => {
            if (category.id === action.categoryId) {
                return {
                    ...category,
                    tasks: [...category.tasks, action.payload],
                };
            }
            return category;
        }),
    })),
    on(addNewCategorySuccess, (state, action) => ({
        ...state,
        categories: [
            ...state.categories,
            {
                id: action.payload.categoryId,
                tasks: [],
                name: action.payload.categoryName,
            },
        ],
    }))
);
