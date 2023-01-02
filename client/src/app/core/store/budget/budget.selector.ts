import { createSelector } from '@ngrx/store';
import { AppState } from '../state';
import { IBudgetState } from './budget.state';

export const selectBudget = (state: AppState) => state.budget;

export const selectBudgetCategories = createSelector(
    selectBudget,
    (state: IBudgetState) => state.categories
);

export const selectBudgetCalculation = createSelector(
    selectBudget,
    (state: IBudgetState) => ({
        budgetLeft: state.budgetLeft,
        budgetSpent: state.budgetSpent,
    })
);
