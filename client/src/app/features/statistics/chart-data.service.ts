import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiUrls } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';
import { IBudgetCategoriesData } from './statistics.model';

@Injectable({
    providedIn: 'root',
})
export class ChartDataService {
    constructor(private _http: HttpClient) {}

    getBudgetCategoriesCostData(): Observable<IBudgetCategoriesData> {
        const url = environment.baseUrl + ApiUrls.budgetCategoriesCost;
        return this._http.get<IBudgetCategoriesData>(url);
    }
}
