import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiUrls } from 'src/app/shared/constants';
import { ISpendingDTO } from 'src/app/shared/models';
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

    addNewSpending(spending: ISpendingDTO): Observable<string> {
        const url = environment.baseUrl + ApiUrls.budgetSpending;
        return this._http.post<string>(url, { ...spending });
    }

    editSpending(spending: ISpendingDTO): Observable<any> {
        const url = environment.baseUrl + ApiUrls.budgetSpending;
        return this._http.put(url, { spending: spending.spending });
    }

    editCategory(categoryId: string, newCategoryName: string): Observable<any> {
        const url = environment.baseUrl + ApiUrls.budgetCategory;
        return this._http.put(url, { categoryId, newCategoryName });
    }

    deleteCategory(categoryId: string): Observable<any> {
        const url = environment.baseUrl + ApiUrls.budgetCategory;
        return this._http.delete(url, { params: { categoryId } });
    }

    deleteSpending(categoryId: string, spendingId: string): Observable<any> {
        const url = environment.baseUrl + ApiUrls.budgetSpending;
        return this._http.delete(url, { params: { categoryId, spendingId } });
    }
}
