import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Age, Discount, IAddGuestDialog, Menu, Sex } from '../guests.model';
import { GuestsService, IGuestOptions } from '../guests.service';

@Component({
    selector: 'wp-add-guest-dialog',
    templateUrl: './add-guest-dialog.component.html',
    styleUrls: ['./add-guest-dialog.component.scss'],
})
export class AddGuestDialogComponent implements OnInit {
    ageOptions: IGuestOptions<Age>[] = [];
    sexOptions: IGuestOptions<Sex>[] = [];
    menuOptions: IGuestOptions<Menu>[] = [];
    discountOptions: IGuestOptions<Discount>[] = [];

    constructor(
        public dialogRef: MatDialogRef<AddGuestDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public guestDialog: IAddGuestDialog,
        private _guests: GuestsService
    ) {}

    ngOnInit(): void {
        this.ageOptions = this._guests.getAgeOptions();
        this.sexOptions = this._guests.getSexOptions();
        this.menuOptions = this._guests.getMenuOptions();
        this.discountOptions = this._guests.getDiscountOptions();
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }
}
