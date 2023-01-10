import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, of, switchMap } from 'rxjs';

import {
    addNewUserConfig,
    addNewUserConfigSuccess,
    loadUserConfig,
    loadUserConfigNotFound,
    loadUserConfigSuccess,
    updateUserConfig,
    updateUserConfigSuccess,
} from './user-config.action';
import { UserConfigService } from './user-config.service';

@Injectable()
export class UserConfigEffects {
    constructor(
        private _actions$: Actions,
        private service: UserConfigService
    ) {}

    loadUserConfig = createEffect(() => {
        return this._actions$.pipe(
            ofType(loadUserConfig),
            switchMap(() => {
                return this.service.getUserConfig().pipe(
                    map((config) => loadUserConfigSuccess({ payload: config })),
                    catchError((error: HttpErrorResponse) => {
                        if (error.status === 404) {
                            return of(
                                loadUserConfigNotFound({
                                    payload: {
                                        isInitialConfigDone: false,
                                        brideName: '',
                                        groomName: '',
                                        weddingDate: '',
                                    },
                                })
                            );
                        } else {
                            return EMPTY;
                        }
                    })
                );
            })
        );
    });

    addUserConfig = createEffect(() => {
        return this._actions$.pipe(
            ofType(addNewUserConfig),
            switchMap((action) => {
                return this.service.addNewUserConfig(action.payload).pipe(
                    map(() =>
                        addNewUserConfigSuccess({
                            payload: { ...action.payload },
                        })
                    ),
                    catchError((error) => EMPTY)
                );
            })
        );
    });

    updateUserConfig = createEffect(() => {
        return this._actions$.pipe(
            ofType(updateUserConfig),
            switchMap((action) => {
                return this.service.updateUserConfig(action.payload).pipe(
                    map((config) =>
                        updateUserConfigSuccess({
                            payload: { ...config },
                        })
                    ),
                    catchError((error) => EMPTY)
                );
            })
        );
    });
}
