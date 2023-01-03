import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ISpending } from 'src/app/shared/models';

@Component({
    selector: 'wp-new-spending-dialog',
    templateUrl: './new-spending-dialog.component.html',
    styleUrls: ['./new-spending-dialog.component.scss'],
})
export class NewSpendingDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<NewSpendingDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public spending: ISpending
    ) {}

    onCancelClick(): void {
        this.dialogRef.close();
    }
}
