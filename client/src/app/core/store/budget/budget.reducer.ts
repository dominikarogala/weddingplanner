import { createReducer, on } from '@ngrx/store';

import {
    addNewBudgetCategorySuccess,
    loadBudgetSuccess,
} from './budget.action';

import { initialBudgetState } from './budget.state';

export const budgetReducer = createReducer(
    initialBudgetState,
    on(loadBudgetSuccess, (state, action) => ({
        ...action.payload,
    })),
    on(addNewBudgetCategorySuccess, (state, action) => ({
        ...state,
        categories: [
            ...state.categories,
            {
                id: action.payload.categoryId,
                name: action.payload.categoryName,
                spendings: [],
                isOpened: false,
            },
        ],
    }))
);
