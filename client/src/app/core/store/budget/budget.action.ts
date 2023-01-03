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
