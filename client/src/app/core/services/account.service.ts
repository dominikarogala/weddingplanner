import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrls } from 'src/app/shared/constants';

import { environment } from 'src/environments/environment';
import { IRegisterData } from '../models';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    constructor(private _http: HttpClient) {}

    createAccount(accountData: IRegisterData): Observable<any> {
        const url = environment.baseUrl + ApiUrls.users;
        return this._http.post(url, {
            name: accountData.name,
            email: accountData.email,
            password: accountData.password,
        });
    }
}
