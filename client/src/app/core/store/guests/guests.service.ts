import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IGuest, IGuestsGroup } from 'src/app/features/guests/guests.model';
import { ApiUrls } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';

@Injectable()
export class GuestsService {
    constructor(private _http: HttpClient) {}

    loadGuests(): Observable<IGuestsGroup[]> {
        const url = environment.baseUrl + ApiUrls.guests;
        return this._http.get<IGuestsGroup[]>(url);
    }

    addNewGuest(groupId: string, guest: IGuest): Observable<string> {
        const url = environment.baseUrl + ApiUrls.guests;
        return this._http.post<string>(url, { groupId, guest });
    }

    addNewGroup(groupName: string): Observable<string> {
        const url = environment.baseUrl + ApiUrls.guestsGroup;
        return this._http.post<string>(url, { groupName });
    }
}
