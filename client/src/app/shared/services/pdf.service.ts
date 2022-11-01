import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApiUrls } from '../constants';

@Injectable()
export class PdfService {
    constructor(private _http: HttpClient) {}

    downloadTasksList(): Observable<any> {
        const url = environment.baseUrl + ApiUrls.taskPDF;
        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/pdf');

        return this._http.get(url, { headers: headers, responseType: 'blob' });
    }
}
