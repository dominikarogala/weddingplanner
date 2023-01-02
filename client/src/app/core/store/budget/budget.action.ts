import { createAction, props } from '@ngrx/store';
import { IBudgetState } from './budget.state';

export const loadBudget = createAction('[Budget] Load Budget');
export const loadBudgetSuccess = createAction(
    '[Budget] Load Budget Success',
    props<{ payload: IBudgetState }>()
);

export const addNewBudgetCategory = createAction(
    '[Budget] Add New Category',
    props<{ payload: { categoryName: string } }>()
);
export const addNewBudgetCategorySuccess = createAction(
    '[Budget] Add New Category Success',
    props<{ payload: { categoryId: string; categoryName: string } }>()
);
