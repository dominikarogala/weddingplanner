import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ILoginData } from '../../models';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'wp-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../styles.scss'],
})
export class LoginComponent implements OnInit {
    loginData: ILoginData = { email: '', password: '' };

    constructor(private _authService: AuthService, private _router: Router) {}

    ngOnInit(): void {}

    login(): void {
        this._authService
            .login(this.loginData.email, this.loginData.password)
            .subscribe((result) => {
                this._router.navigate(['app']);
            });
    }
}
