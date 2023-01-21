import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IGuest } from 'src/app/features/guests/guests.model';
import { ApiUrls } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';

@Injectable()
export class GuestsService {
    constructor(private _http: HttpClient) {}

    loadGuests(): Observable<IGuest[]> {
        const url = environment.baseUrl + ApiUrls.guests;
        return this._http.get<IGuest[]>(url);
    }
}
