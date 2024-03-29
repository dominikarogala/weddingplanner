import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogMode, IDialogMode } from 'src/app/shared/dialogs';

import { ISpending } from 'src/app/shared/models';

export interface ISpendingDialog extends IDialogMode {
    spending: ISpending;
}

@Component({
    selector: 'wp-spending-dialog',
    templateUrl: './spending-dialog.component.html',
    styleUrls: ['./spending-dialog.component.scss'],
})
export class SpendingDialogComponent implements OnInit {
    title: string;
    confirmButtonLabel: string;

    constructor(
        public dialogRef: MatDialogRef<SpendingDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public spendingDialog: ISpendingDialog
    ) {}

    ngOnInit(): void {
        this.title =
            this.spendingDialog.mode === DialogMode.Creation
                ? 'budget.addSpending'
                : 'budget.editSpending';

        this.confirmButtonLabel =
            this.spendingDialog.mode === DialogMode.Creation
                ? 'app.add'
                : 'app.save';
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }
}
