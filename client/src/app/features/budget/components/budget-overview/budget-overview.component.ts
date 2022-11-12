import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BudgetDetermineDialogComponent } from '../budget-determine-dialog/budget-determine-dialog.component';

@Component({
    selector: 'wp-budget-overview',
    templateUrl: './budget-overview.component.html',
    styleUrls: ['./budget-overview.component.scss'],
})
export class BudgetOverviewComponent implements OnInit {
    @Input() amountOfMoney = 0;

    constructor(private _dialog: MatDialog) {}

    ngOnInit(): void {}

    editBudget(): void {
        const dialogRef = this._dialog.open(BudgetDetermineDialogComponent, {
            width: '30rem',
            data: this.amountOfMoney,
        });

        dialogRef.afterClosed().subscribe((amount: string) => {
            // if (!!categoryName) {
            //     this._store.dispatch(
            //         addNewCategory({ payload: { categoryName } })
            //     );
            // }
        });
    }
}
