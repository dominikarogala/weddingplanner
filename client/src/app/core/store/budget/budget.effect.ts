import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap } from 'rxjs';

import {
    addNewBudgetCategory,
    addNewBudgetCategorySuccess,
    addNewBudgetSpending,
    addNewBudgetSpendingSuccess,
    deleteCategory,
    deleteCategorySuccess,
    deleteSpending,
    deleteSpendingSuccess,
    editCategory,
    editCategorySuccess,
    editSpending,
    editSpendingSuccess,
    loadBudget,
    loadBudgetSuccess,
} from './budget.action';
import { BudgetService } from './budget.service';
@Injectable()
export class BudgetEffects {
    constructor(private _actions$: Actions, private service: BudgetService) {}

    loadBudget = createEffect(() => {
        return this._actions$.pipe(
            ofType(loadBudget),
            switchMap(() => {
                return this.service.loadBudget().pipe(
                    map((result) =>
                        loadBudgetSuccess({
                            payload: {
                                ...result,
                                categories: result.categories.map((cat) => ({
                                    ...cat,
                                    isOpened: false,
                                })),
                            },
                        })
                    ),
                    catchError((error) => EMPTY)
                );
            })
        );
    });

    addNewCategory = createEffect(() => {
        return this._actions$.pipe(
            ofType(addNewBudgetCategory),
            switchMap((action) => {
                return this.service
                    .addNewCategory(action.payload.categoryName)
                    .pipe(
                        map((result) =>
                            addNewBudgetCategorySuccess({
                                payload: {
                                    categoryId: result,
                                    categoryName: action.payload.categoryName,
                                },
                            })
                        ),
                        catchError((error) => EMPTY)
                    );
            })
        );
    });

    addNewSpending = createEffect(() => {
        return this._actions$.pipe(
            ofType(addNewBudgetSpending),
            switchMap((action) => {
                return this.service.addNewSpending(action.payload).pipe(
                    map((result) =>
                        addNewBudgetSpendingSuccess({
                            payload: {
                                ...action.payload.spending,
                                id: result,
                            },
                        })
                    ),
                    catchError((error) => EMPTY)
                );
            })
        );
    });

    editSpending = createEffect(() => {
        return this._actions$.pipe(
            ofType(editSpending),
            switchMap((action) => {
                return this.service.editSpending(action.payload).pipe(
                    map(() => editSpendingSuccess({ payload: action.payload })),
                    catchError((error) => EMPTY)
                );
            })
        );
    });

    editCategory = createEffect(() => {
        return this._actions$.pipe(
            ofType(editCategory),
            switchMap((action) => {
                return this.service
                    .editCategory(
                        action.payload.categoryId,
                        action.payload.categoryName
                    )
                    .pipe(
                        map(() =>
                            editCategorySuccess({ payload: action.payload })
                        ),
                        catchError((error) => EMPTY)
                    );
            })
        );
    });

    deleteCategory = createEffect(() => {
        return this._actions$.pipe(
            ofType(deleteCategory),
            switchMap((action) => {
                return this.service
                    .deleteCategory(action.payload.categoryId)
                    .pipe(
                        map(() =>
                            deleteCategorySuccess({
                                payload: {
                                    categoryId: action.payload.categoryId,
                                },
                            })
                        ),
                        catchError((error) => EMPTY)
                    );
            })
        );
    });

    deleteSpending = createEffect(() => {
        return this._actions$.pipe(
            ofType(deleteSpending),
            switchMap((action) => {
                return this.service
                    .deleteSpending(
                        action.payload.categoryId,
                        action.payload.spendingId
                    )
                    .pipe(
                        map(() =>
                            deleteSpendingSuccess({
                                payload: {
                                    categoryId: action.payload.categoryId,
                                    spendingId: action.payload.spendingId,
                                },
                            })
                        ),
                        catchError((error) => EMPTY)
                    );
            })
        );
    });
}
