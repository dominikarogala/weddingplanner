import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { map, switchMap, catchError, EMPTY } from 'rxjs';

import { loadGuests, loadGuestsSuccess } from './guests.action';
import { GuestsService } from './guests.service';

@Injectable()
export class GuestsEffects {
    constructor(
        private _actions$: Actions,
        private _service: GuestsService,
        private _toastr: ToastrService,
        private _translate: TranslateService
    ) {}

    loadBudget = createEffect(() => {
        return this._actions$.pipe(
            ofType(loadGuests),
            switchMap(() => {
                return this._service.loadGuests().pipe(
                    map((result) =>
                        loadGuestsSuccess({
                            payload: {
                                guests: [...result],
                            },
                        })
                    ),
                    catchError((error) => {
                        this._toastr.error(
                            this._translate.instant('toaster.loadGuestsError')
                        );
                        return EMPTY;
                    })
                );
            })
        );
    });

    // addNewCategory = createEffect(() => {
    //     return this._actions$.pipe(
    //         ofType(addNewBudgetCategory),
    //         switchMap((action) => {
    //             return this._service
    //                 .addNewCategory(action.payload.categoryName)
    //                 .pipe(
    //                     map((result) =>
    //                         addNewBudgetCategorySuccess({
    //                             payload: {
    //                                 categoryId: result,
    //                                 categoryName: action.payload.categoryName,
    //                             },
    //                         })
    //                     ),
    //                     catchError((error) => {
    //                         this._toastr.error(
    //                             this._translate.instant(
    //                                 'toaster.createCategoryError'
    //                             )
    //                         );
    //                         return EMPTY;
    //                     })
    //                 );
    //         })
    //     );
    // });
}
