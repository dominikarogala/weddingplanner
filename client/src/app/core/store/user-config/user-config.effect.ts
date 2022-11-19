import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import {
    loadUserConfig,
    loadUserConfigNotFound,
    loadUserConfigSuccess,
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
                    })
                );
            })
        );
    });
}
