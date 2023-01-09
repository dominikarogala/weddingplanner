import { createReducer, on } from '@ngrx/store';
import { createStateObservable } from '@ngrx/store-devtools/src/instrument';

import {
    addNewBudgetCategorySuccess,
    changeBudgetCategoryExpansionState,
    changeBudgetSpendingExpansionState,
    editCategorySuccess,
    editSpendingSuccess,
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
    })),
    on(changeBudgetCategoryExpansionState, (state, action) => ({
        ...state,
        categories: state.categories.map((category) => {
            if (category.id === action.payload.categoryId) {
                return {
                    ...category,
                    isOpened: action.payload.state,
                };
            } else {
                return category;
            }
        }),
    })),
    on(changeBudgetSpendingExpansionState, (state, action) => ({
        ...state,
        categories: state.categories.map((category) => {
            if (category.id === action.payload.categoryId) {
                return {
                    ...category,
                    spendings: category.spendings.map((spending) => {
                        if (spending.id === action.payload.spendingId) {
                            return {
                                ...spending,
                                isOpened: action.payload.state,
                            };
                        } else {
                            return spending;
                        }
                    }),
                };
            } else {
                return category;
            }
        }),
    })),
    on(editSpendingSuccess, (state, action) => ({
        ...state,
        categories: state.categories.map((category) => {
            if (category.id === action.payload.categoryId) {
                return {
                    ...category,
                    spendings: category.spendings.map((spending) => {
                        if (spending.id === action.payload.spending.id) {
                            return action.payload.spending;
                        } else {
                            return spending;
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
                return { ...category, name: action.payload.categoryName };
            } else {
                return category;
            }
        }),
    }))
);
