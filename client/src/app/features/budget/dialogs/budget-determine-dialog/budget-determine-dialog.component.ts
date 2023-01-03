import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'wp-budget-determine-dialog',
    templateUrl: './budget-determine-dialog.component.html',
    styleUrls: ['./budget-determine-dialog.component.scss'],
})
export class BudgetDetermineDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<BudgetDetermineDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public amount: number
    ) {}

    onCancelClick(): void {
        this.dialogRef.close();
    }
}
