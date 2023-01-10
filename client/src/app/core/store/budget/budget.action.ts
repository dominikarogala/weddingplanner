import { createAction, props } from '@ngrx/store';

import { ISpending, ISpendingDTO } from 'src/app/shared/models';
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

export const addNewBudgetSpending = createAction(
    '[Budget] Add New Spending',
    props<{ payload: ISpendingDTO }>()
);
export const addNewBudgetSpendingSuccess = createAction(
    '[Budget] Add New Spending Success',
    props<{ payload: ISpending }>()
);

export const changeBudgetCategoryExpansionState = createAction(
    '[Budget] Change Category Expansion Status',
    props<{ payload: { categoryId: string; state: boolean } }>()
);

export const changeBudgetSpendingExpansionState = createAction(
    '[Budget] Change Spending Expansion Status',
    props<{
        payload: { categoryId: string; spendingId: string; state: boolean };
    }>()
);

export const editSpending = createAction(
    '[Budget] Edit Spending',
    props<{ payload: ISpendingDTO }>()
);
export const editSpendingSuccess = createAction(
    '[Budget] Edit Task Success',
    props<{ payload: ISpendingDTO }>()
);

export const editCategory = createAction(
    '[Budget] Edit Category',
    props<{ payload: { categoryId: string; categoryName: string } }>()
);
export const editCategorySuccess = createAction(
    '[Budget] Edit Category Success',
    props<{ payload: { categoryId: string; categoryName: string } }>()
);

export const deleteCategory = createAction(
    '[Budget] Delete Category',
    props<{ payload: { categoryId: string } }>()
);
export const deleteCategorySuccess = createAction(
    '[Budget] Delete Category Success',
    props<{ payload: { categoryId: string } }>()
);

export const deleteSpending = createAction(
    '[Budget] Delete Spending',
    props<{ payload: { categoryId: string; spendingId: string } }>()
);
export const deleteSpendingSuccess = createAction(
    '[Budget] Delete Spending Success',
    props<{ payload: { categoryId: string; spendingId: string } }>()
);
