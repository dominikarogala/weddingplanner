import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { map, switchMap, catchError, EMPTY } from 'rxjs';

import {
    addNewGuest,
    addNewGuestsGroup,
    addNewGuestsGroupSuccess,
    addNewGuestSuccess,
    loadGuests,
    loadGuestsSuccess,
} from './guests.action';
import { GuestsService } from './guests.service';

@Injectable()
export class GuestsEffects {
    constructor(
        private _actions$: Actions,
        private _service: GuestsService,
        private _toastr: ToastrService,
        private _translate: TranslateService
    ) {}

    loadGuests = createEffect(() => {
        return this._actions$.pipe(
            ofType(loadGuests),
            switchMap(() => {
                return this._service.loadGuests().pipe(
                    map((result) =>
                        loadGuestsSuccess({
                            payload: {
                                groups: result,
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

    addNewGuest = createEffect(() => {
        return this._actions$.pipe(
            ofType(addNewGuest),
            switchMap((payload) => {
                return this._service
                    .addNewGuest(payload.groupId, payload.guest)
                    .pipe(
                        map((guestId) =>
                            addNewGuestSuccess({
                                groupId: payload.groupId,
                                guest: { ...payload.guest, id: guestId },
                            })
                        ),
                        catchError((error) => {
                            this._toastr.error(
                                this._translate.instant(
                                    'toaster.addGuestsError'
                                )
                            );
                            return EMPTY;
                        })
                    );
            })
        );
    });

    addNewGroup = createEffect(() => {
        return this._actions$.pipe(
            ofType(addNewGuestsGroup),
            switchMap((payload) => {
                return this._service.addNewGroup(payload.groupName).pipe(
                    map((groupId) =>
                        addNewGuestsGroupSuccess({
                            groupId,
                            groupName: payload.groupName,
                        })
                    ),
                    catchError((error) => {
                        this._toastr.error(
                            this._translate.instant(
                                'toaster.addGuestsGroupError'
                            )
                        );
                        return EMPTY;
                    })
                );
            })
        );
    });
}
