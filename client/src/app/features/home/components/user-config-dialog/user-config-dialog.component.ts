import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IUserConfig } from 'src/app/core/store/user-config';

@Component({
    selector: 'wp-user-config-dialog',
    templateUrl: './user-config-dialog.component.html',
    styleUrls: ['./user-config-dialog.component.scss'],
})
export class UserConfigDialogComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<UserConfigDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: IUserConfig
    ) {}

    ngOnInit(): void {}
}
