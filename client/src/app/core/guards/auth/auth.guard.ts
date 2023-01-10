import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../../services';
import { AppState } from '../../store/state';
import { loadUserConfig } from '../../store/user-config';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private _authService: AuthService,
        private _router: Router,
        private _store: Store<AppState>
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (!this._authService.checkIsUserAuthenticated()) {
            this._router.navigate(['signin']);
            return false;
        }

        this._store.dispatch(loadUserConfig());
        return true;
    }
}
