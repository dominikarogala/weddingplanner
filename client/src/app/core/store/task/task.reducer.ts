import { createReducer, on } from '@ngrx/store';

import { loadTasksSuccess, initialTaskState } from '.';
import {
    addNewCategorySuccess,
    addNewTaskSuccess,
    changeCategoryExpansionState,
    changeTaskExpansionState,
    deleteCategorySuccess,
    deleteTaskSuccess,
    editCategorySuccess,
    editTaskSuccess,
} from './task.action';

export const taskReducer = createReducer(
    initialTaskState,
    on(loadTasksSuccess, (state, action) => ({
        categories: [...action.payload],
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
                isOpened: false,
            },
        ],
    })),
    on(deleteTaskSuccess, (state, action) => ({
        ...state,
        categories: state.categories.map((category) => {
            if (category.id === action.payload.categoryId) {
                return {
                    ...category,
                    tasks: category.tasks.filter(
                        (task) => task.id !== action.payload.taskId
                    ),
                };
            }
            return category;
        }),
    })),
    on(changeCategoryExpansionState, (state, action) => ({
        ...state,
        categories: state.categories.map((category) => {
            if (category.id === action.payload.categoryId) {
                return {
                    ...category,
                    isOpened: action.payload.isCategoryOpened,
                };
            } else {
                return category;
            }
        }),
    })),
    on(changeTaskExpansionState, (state, action) => ({
        ...state,
        categories: state.categories.map((category) => {
            if (category.id === action.payload.categoryId) {
                return {
                    ...category,
                    tasks: category.tasks.map((task) => {
                        if (task.id === action.payload.taskId) {
                            return {
                                ...task,
                                isOpened: action.payload.isTaskOpened,
                            };
                        } else {
                            return task;
                        }
                    }),
                };
            } else {
                return category;
            }
        }),
    })),
    on(deleteCategorySuccess, (state, action) => ({
        ...state,
        categories: state.categories.filter(
            (category) => category.id !== action.payload.categoryId
        ),
    })),
    on(editTaskSuccess, (state, action) => ({
        ...state,
        categories: state.categories.map((category) => {
            if (category.id === action.payload.categoryId) {
                return {
                    ...category,
                    tasks: category.tasks.map((task) => {
                        if (task.id === action.payload.task.id) {
                            return {
                                ...task,
                                ...action.payload.task,
                            };
                        } else {
                            return task;
                        }
                    }),
                };
            } else {
                return category;
            }
        }),
    })),
    on(editCategorySuccess, (state, action) => ({
        ...state,
        categories: state.categories.map((category) => {
            if (category.id === action.payload.categoryId) {
                return {
                    ...category,
                    name: action.payload.categoryName,
                };
            } else {
                return category;
            }
        }),
    }))
);
