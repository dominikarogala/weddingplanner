import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Age, Discount, Menu, Sex } from './guests.model';

export interface IGuestOptions<T> {
    value: T;
    label: string;
    icon?: string;
}

@Injectable()
export class GuestsService {
    constructor(private _translate: TranslateService) {}

    getSexOptions(): IGuestOptions<Sex>[] {
        return [
            {
                value: Sex.male,
                label: this._translate.instant('guests.sex.male'),
            },
            {
                value: Sex.female,
                label: this._translate.instant('guests.sex.female'),
            },
            {
                value: Sex.unspecified,
                label: this._translate.instant('guests.sex.unspecified'),
            },
        ];
    }

    getAgeOptions(): IGuestOptions<Age>[] {
        return [
            {
                value: Age.infant,
                label: this._translate.instant('guests.age.infant'),
            },
            {
                value: Age.child,
                label: this._translate.instant('guests.age.child'),
            },
            {
                value: Age.teenager,
                label: this._translate.instant('guests.age.teenager'),
            },
            {
                value: Age.youngAdult,
                label: this._translate.instant('guests.age.youngAdult'),
            },
            {
                value: Age.adult,
                label: this._translate.instant('guests.age.adult'),
            },
            {
                value: Age.middleAge,
                label: this._translate.instant('guests.age.middleAge'),
            },
            {
                value: Age.elderly,
                label: this._translate.instant('guests.age.elderly'),
            },
        ];
    }

    getMenuOptions(): IGuestOptions<Menu>[] {
        return [
            {
                value: Menu.standard,
                label: this._translate.instant('guests.menu.standard'),
                icon: 'assets/icons/standard.svg',
            },
            {
                value: Menu.vegetarian,
                label: this._translate.instant('guests.menu.vegetarian'),
                icon: 'assets/icons/no-meat.svg',
            },
            {
                value: Menu.vegan,
                label: this._translate.instant('guests.menu.vegan'),
                icon: 'assets/icons/vegan.svg',
            },
            {
                value: Menu.kids,
                label: this._translate.instant('guests.menu.kids'),
                icon: 'assets/icons/child.svg',
            },
        ];
    }

    getDiscountOptions(): IGuestOptions<Discount>[] {
        return [
            {
                value: Discount.normal,
                label: this._translate.instant('guests.discount.normal'),
                icon: 'assets/icons/money.svg',
            },
            {
                value: Discount.free,
                label: this._translate.instant('guests.discount.free'),
                icon: 'assets/icons/free.svg',
            },
            {
                value: Discount.child,
                label: this._translate.instant('guests.discount.child'),
                icon: 'assets/icons/child.svg',
            },
            {
                value: Discount.staff,
                label: this._translate.instant('guests.discount.staff'),
                icon: 'assets/icons/staff.svg',
            },
        ];
    }
}
