import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import {
    addNewBudgetSpending,
    changeBudgetCategoryExpansionState,
    deleteCategory,
    editCategory,
    IBudgetState,
} from 'src/app/core/store/budget';
import { CategoryDialogComponent, DialogMode } from 'src/app/shared/dialogs';
import { IBudgetCategory, ISpending } from 'src/app/shared/models';
import { SpendingDialogComponent } from '../../dialogs';

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

    editCategory() {
        const dialogRef = this._dialog.open(CategoryDialogComponent, {
            width: '30rem',
            data: {
                categoryName: this.category.name,
                mode: DialogMode.Edition,
            },
        });

        dialogRef.afterClosed().subscribe((categoryName: string) => {
            if (!!categoryName) {
                this._store.dispatch(
                    editCategory({
                        payload: { categoryId: this.category.id, categoryName },
                    })
                );
            }
        });
    }

    deleteCategory() {
        this._store.dispatch(
            deleteCategory({
                payload: { categoryId: this.category.id },
            })
        );
    }

    openAddSpendingDialog() {
        const dialogRef = this._dialog.open(SpendingDialogComponent, {
            width: '30rem',
            data: { mode: DialogMode.Creation, spending: { name: '' } },
        });

        dialogRef.afterClosed().subscribe((newSpending: ISpending) => {
            if (!newSpending) {
                return;
            }

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
}
