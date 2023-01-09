import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap, tap } from 'rxjs';

import {
    addNewBudgetCategory,
    addNewBudgetCategorySuccess,
    addNewBudgetSpending,
    addNewBudgetSpendingSuccess,
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
                    map((result) =>
                        editSpendingSuccess({ payload: action.payload })
                    ),
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
                        map((result) =>
                            editCategorySuccess({ payload: action.payload })
                        ),
                        catchError((error) => EMPTY)
                    );
            })
        );
    });
}
