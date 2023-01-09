import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
    changeBudgetSpendingExpansionState,
    editSpending,
} from 'src/app/core/store/budget';

import { AppState } from 'src/app/core/store/state';
import { DialogMode } from 'src/app/shared/dialogs';
import { ISpending } from 'src/app/shared/models';
import { SpendingDialogComponent } from '../../dialogs';

@Component({
    selector: 'wp-budget-table-element',
    templateUrl: './budget-table-element.component.html',
    styleUrls: ['./budget-table-element.component.scss'],
})
export class BudgetTableElementComponent {
    @Input() spending: ISpending;
    @Input() categoryId: string;

    constructor(private _store: Store<AppState>, private _dialog: MatDialog) {}

    onSpendingClicked(isPanelOpened: boolean): void {
        this._store.dispatch(
            changeBudgetSpendingExpansionState({
                payload: {
                    categoryId: this.categoryId,
                    spendingId: this.spending.id,
                    state: isPanelOpened,
                },
            })
        );
    }

    openEditSpendingDialog() {
        const dialogRef = this._dialog.open(SpendingDialogComponent, {
            width: '30rem',
            data: { ...this.spending, mode: DialogMode.Edition },
        });

        dialogRef.afterClosed().subscribe((newSpending: ISpending) => {
            this._editSpending(newSpending);
        });
    }

    private _editSpending(spending: ISpending) {
        this._store.dispatch(
            editSpending({
                payload: {
                    spending,
                    categoryId: this.categoryId,
                },
            })
        );
    }

    deleteSpending() {
        throw new Error('Method not implemented.');
    }
}
