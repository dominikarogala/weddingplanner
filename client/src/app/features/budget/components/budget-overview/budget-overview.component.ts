import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { selectBudgetCalculation } from 'src/app/core/store/budget';

import { AppState } from 'src/app/core/store/state';
import {
    selectBudgetValue,
    updateUserConfig,
} from 'src/app/core/store/user-config';
import { BudgetDetermineDialogComponent } from '../../dialogs/budget-determine-dialog/budget-determine-dialog.component';

@Component({
    selector: 'wp-budget-overview',
    templateUrl: './budget-overview.component.html',
    styleUrls: ['./budget-overview.component.scss'],
})
export class BudgetOverviewComponent implements OnInit {
    amountOfMoney = 0;

    budget$: Observable<number>;
    budgetInfo$ = this._store.select(selectBudgetCalculation);

    constructor(private _dialog: MatDialog, private _store: Store<AppState>) {}

    ngOnInit(): void {
        this.budget$ = this._store.select(selectBudgetValue).pipe(
            tap((budget) => {
                this.amountOfMoney = budget;
            })
        );
    }

    editBudget(): void {
        const dialogRef = this._dialog.open(BudgetDetermineDialogComponent, {
            width: '30rem',
            data: this.amountOfMoney,
        });

        dialogRef.afterClosed().subscribe((amount: number) => {
            this._store.dispatch(
                updateUserConfig({ payload: { budget: amount } })
            );
        });
    }
}
