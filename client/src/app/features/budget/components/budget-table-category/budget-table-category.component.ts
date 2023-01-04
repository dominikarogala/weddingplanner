import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
    addNewBudgetSpending,
    changeBudgetCategoryExpansionState,
    changeBudgetSpendingExpansionState,
    IBudgetState,
} from 'src/app/core/store/budget';

import { IBudgetCategory, ISpending } from 'src/app/shared/models';
import { NewSpendingDialogComponent } from '../../dialogs';

// TODO: czym sie różni Store,forRoot od forFeature
@Component({
    selector: 'wp-budget-table-category',
    templateUrl: './budget-table-category.component.html',
    styleUrls: ['./budget-table-category.component.scss'],
})
export class BudgetTableCategoryComponent {
    editCategory() {
        throw new Error('Method not implemented.');
    }
    deleteCategory() {
        throw new Error('Method not implemented.');
    }
    @Input() category: IBudgetCategory;

    constructor(
        private _dialog: MatDialog,
        private _store: Store<IBudgetState>
    ) {}

    openAddSpendingDialog() {
        const dialogRef = this._dialog.open(NewSpendingDialogComponent, {
            width: '30rem',
            data: {},
        });

        dialogRef.afterClosed().subscribe((newSpending: ISpending) => {
            this._store.dispatch(
                addNewBudgetSpending({
                    payload: {
                        spending: newSpending,
                        categoryId: this.category.id,
                    },
                })
            );
        });
    }

    onCategoryPanelClick(isCategoryOpened: boolean): void {
        this._store.dispatch(
            changeBudgetCategoryExpansionState({
                payload: {
                    categoryId: this.category.id,
                    state: isCategoryOpened,
                },
            })
        );
    }

    onSpendingClicked(isPanelOpened: boolean, spendingId: string): void {
        this._store.dispatch(
            changeBudgetSpendingExpansionState({
                payload: {
                    categoryId: this.category.id,
                    spendingId,
                    state: isPanelOpened,
                },
            })
        );
    }
}
