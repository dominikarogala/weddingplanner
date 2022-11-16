import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap } from 'rxjs';

import { loadUserConfig, loadUserConfigSuccess } from './user-config.action';
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
                    catchError(() => EMPTY)
                );
            })
        );
    });
}
