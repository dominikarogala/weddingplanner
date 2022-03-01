import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrls } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private _http: HttpClient) {}

    login(username: string, password: string) {
        const url = environment.baseUrl + ApiUrls.login;
        return this._http
            .post(url, { username, password })
            .pipe(tap((result) => this._setSession(result)));
    }

    getToken(): string {
        return localStorage.getItem('token') || '';
    }

    checkIsUserAuthenticated(): boolean {
        const x = !!this.getToken() && !this._checkIsTokenExpired();
        return x;
    }

    private _checkIsTokenExpired(): boolean {
        debugger;
        const token = this.getToken();
        const expirationTime = JSON.parse(atob(token.split('.')[1])).exp;
        const x = Math.floor(new Date().getTime() / 1000) >= expirationTime;

        return x;
    }

    private _setSession(result: any) {
        localStorage.setItem('token', result.access_token);
    }
}
