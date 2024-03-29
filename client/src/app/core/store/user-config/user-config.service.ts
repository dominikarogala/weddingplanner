import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiUrls } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';
import { IUserConfig } from './user-config.state';

@Injectable()
export class UserConfigService {
    constructor(private _http: HttpClient) {}

    getUserConfig(): Observable<IUserConfig> {
        const url = environment.baseUrl + ApiUrls.userconfig;
        return this._http.get<IUserConfig>(url);
    }

    addNewUserConfig(userconfig: IUserConfig): Observable<string> {
        const url = environment.baseUrl + ApiUrls.userconfig;
        return this._http.post<string>(url, { userconfig });
    }

    updateUserConfig(
        userconfig: Partial<IUserConfig>
    ): Observable<IUserConfig> {
        const url = environment.baseUrl + ApiUrls.userconfig;
        return this._http.put<IUserConfig>(url, { userconfig });
    }
}
