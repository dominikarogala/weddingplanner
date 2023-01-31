import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, EMPTY, Observable } from 'rxjs';

import { ApiUrls } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';
import {
    IBudgetCategoriesCostData,
    IConfirmedGuests,
    IGuestsSexData,
    ITaskCategoriesDoneData,
} from './statistics.model';

@Injectable()
export class ChartDataService {
    constructor(
        private _http: HttpClient,
        private _toastr: ToastrService,
        private _translate: TranslateService
    ) {}

    getBudgetCategoriesCostData(): Observable<IBudgetCategoriesCostData> {
        const url = environment.baseUrl + ApiUrls.budgetCategoriesCost;
        return this._http.get<IBudgetCategoriesCostData>(url).pipe(
            catchError(() => {
                this._toastr.error(
                    this._translate.instant('toaster.chartDataError')
                );
                return EMPTY;
            })
        );
    }

    getTaskCategoriesDoneData(): Observable<ITaskCategoriesDoneData> {
        const url = environment.baseUrl + ApiUrls.taskCategoriesDone;
        return this._http.get<ITaskCategoriesDoneData>(url).pipe(
            catchError(() => {
                this._toastr.error(
                    this._translate.instant('toaster.chartDataError')
                );
                return EMPTY;
            })
        );
    }

    getGuestsSex(): Observable<IGuestsSexData> {
        const url = environment.baseUrl + ApiUrls.guestsSex;
        return this._http.get<IGuestsSexData>(url).pipe(
            catchError(() => {
                this._toastr.error(
                    this._translate.instant('toaster.chartDataError')
                );
                return EMPTY;
            })
        );
    }

    getConfirmedGuests(): Observable<IConfirmedGuests> {
        const url = environment.baseUrl + ApiUrls.confirmedGuests;
        return this._http.get<IConfirmedGuests>(url).pipe(
            catchError(() => {
                this._toastr.error(
                    this._translate.instant('toaster.chartDataError')
                );
                return EMPTY;
            })
        );
    }
}
