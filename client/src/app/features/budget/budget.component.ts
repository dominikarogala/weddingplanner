import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
    addNewBudgetCategory,
    loadBudget,
    selectBudgetCategories,
} from 'src/app/core/store/budget';

import { AppState } from 'src/app/core/store/state';
import { Categories } from 'src/app/shared/constants';
import {
    CategoryDialogComponent,
    DialogMode,
    ICategoryDialogData,
} from 'src/app/shared/dialogs';

@Component({
    selector: 'wp-budget',
    templateUrl: './budget.component.html',
    styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
    budgetCategories$ = this._store.select(selectBudgetCategories);

    constructor(private _store: Store<AppState>, private _dialog: MatDialog) {}

    ngOnInit(): void {
        this._store.dispatch(loadBudget());
    }

    openNewCategoryDialog(): void {
        const dialogData: ICategoryDialogData = {
            mode: DialogMode.Creation,
            title: 'toDoList.newCategoryTitle',
            categoryName: '',
            options: Categories,
        };

        const dialogRef = this._dialog.open(CategoryDialogComponent, {
            width: '30rem',
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((categoryName: string) => {
            if (!!categoryName) {
                this._store.dispatch(
                    addNewBudgetCategory({ payload: { categoryName } })
                );
            }
        });
    }

    identifierFn(index: number, item: any): string {
        return item.id;
    }
}
