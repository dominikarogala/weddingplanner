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
    props<{ payload: ITask; categoryId: string }>()
);

export const addNewCategory = createAction(
    '[Task] Add New Category',
    props<{ payload: { categoryName: string } }>()
);
export const addNewCategorySuccess = createAction(
    '[Task] Add New Category Success',
    props<{ payload: { categoryId: string; categoryName: string } }>()
);

export const deleteTask = createAction(
    '[Task] Delete Task',
    props<{ payload: { categoryId: string; taskId: string } }>()
);
export const deleteTaskSuccess = createAction(
    '[Task] Delete Task Success',
    props<{ payload: { categoryId: string; taskId: string } }>()
);

export const changeCategoryExpansionState = createAction(
    '[Task] Change Category Expansion State',
    props<{ payload: { categoryId: string; isCategoryOpened: boolean } }>()
);

export const changeTaskExpansionState = createAction(
    '[Task] Change Task Expansion State',
    props<{
        payload: { categoryId: string; taskId: string; isTaskOpened: boolean };
    }>()
);
