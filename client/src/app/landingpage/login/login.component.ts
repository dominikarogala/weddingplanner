import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs';

import { ILoginData } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services';
import { AppState } from 'src/app/core/store/state/app.state';
import { loadUserConfig } from 'src/app/core/store/user-config';

@Component({
    selector: 'wp-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../styles.scss'],
})
export class LoginComponent implements OnInit {
    loginData: ILoginData = { email: '', password: '' };

    constructor(
        private _authService: AuthService,
        private _router: Router,
        private _store: Store<AppState>
    ) {}

    ngOnInit(): void {}

    login(): void {
        this._authService
            .login(this.loginData.email, this.loginData.password)
            .subscribe((result) => {
                debugger;
                this._store.dispatch(loadUserConfig());
                this._router.navigate(['app']);
            });
    }
}
