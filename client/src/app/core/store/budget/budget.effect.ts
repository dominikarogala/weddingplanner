import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap, tap } from 'rxjs';

import {
    addNewBudgetCategory,
    addNewBudgetCategorySuccess,
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
                            payload: { ...result },
                        })
                    ),
                    catchError((error) => EMPTY)
                );
            })
        );
    });

    createNewCategory = createEffect(() => {
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
}
