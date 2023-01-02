import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ApiUrls } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';
import { IBudgetState } from './budget.state';

@Injectable()
export class BudgetService {
    constructor(private _http: HttpClient) {}

    loadBudget(): Observable<IBudgetState> {
        const url = environment.baseUrl + ApiUrls.budget;
        return this._http.get<IBudgetState>(url);
    }

    addNewCategory(categoryName: string): Observable<string> {
        const url = environment.baseUrl + ApiUrls.budgetCategory;
        return this._http.post<string>(url, { categoryName });
    }
}
