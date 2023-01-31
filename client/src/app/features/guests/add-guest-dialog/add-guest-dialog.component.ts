import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
    Age,
    Discount,
    IAddGuestDialog,
    IGuest,
    Menu,
    Sex,
} from '../guests.model';
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

    addGuestForm = this._formBuilder.group({
        name: ['', Validators.required],
        isConfirmed: false,
        isInvited: false,
        isTransportNeeded: false,
        isAccomodationNeeded: false,
        sex: null as IGuestOptions<Sex>,
        age: null as IGuestOptions<Age>,
        discount: null as IGuestOptions<Discount>,
        menu: null as IGuestOptions<Menu>,
    });

    constructor(
        public dialogRef: MatDialogRef<AddGuestDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public guestDialog: IAddGuestDialog,
        private _guests: GuestsService,
        private _formBuilder: FormBuilder
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

    onFormSubmit(): void {
        const newGuest: IGuest = {
            name: this.addGuestForm.controls.name.value,
            isInvited: this.addGuestForm.controls.isInvited.value,
            isConfirmed: this.addGuestForm.controls.isConfirmed.value,
            isTransportNeeded:
                this.addGuestForm.controls.isTransportNeeded.value,
            isAccomodationNeeded:
                this.addGuestForm.controls.isAccomodationNeeded.value,
            discount: this.addGuestForm.controls.discount.value?.value,
            age: this.addGuestForm.controls.age.value?.value,
            sex: this.addGuestForm.controls.sex.value?.value,
            menu: this.addGuestForm.controls.menu.value?.value,
        };

        this._setDefaultValuesIfEmpty(newGuest);
        this.dialogRef.close(newGuest);
    }

    private _setDefaultValuesIfEmpty(newGuest: Partial<IGuest>) {
        if (newGuest.discount === undefined) {
            newGuest.discount = Discount.normal;
        }

        if (newGuest.age === undefined) {
            newGuest.age = Age.adult;
        }

        if (newGuest.sex === undefined) {
            newGuest.sex = Sex.unspecified;
        }

        if (newGuest.menu === undefined) {
            newGuest.menu = Menu.standard;
        }
    }
}
