import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addNewBudgetSpending, IBudgetState } from 'src/app/core/store/budget';

import { IBudgetCategory, ISpending } from 'src/app/shared/models';
import { NewSpendingDialogComponent } from '../../dialogs';

// TODO: czym sie różni Store,forRoot od forFeature
@Component({
    selector: 'wp-budget-table-category',
    templateUrl: './budget-table-category.component.html',
    styleUrls: ['./budget-table-category.component.scss'],
})
export class BudgetTableCategoryComponent {
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
}
