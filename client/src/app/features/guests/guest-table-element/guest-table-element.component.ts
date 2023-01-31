import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/state';

import { IGuest, IGuestsGroup } from '../guests.model';
import { GuestsService } from '../guests.service';

@Component({
    selector: 'wp-guest-table-element',
    templateUrl: './guest-table-element.component.html',
    styleUrls: ['./guest-table-element.component.scss'],
})
export class GuestTableElementComponent implements OnInit {
    @Input() guest: IGuest;
    @Input() groupId: string;

    menu: string;
    discount: string;

    constructor(
        private _store: Store<AppState>,
        private _guests: GuestsService
    ) {}

    ngOnInit(): void {
        this.menu = this._guests
            .getMenuOptions()
            .find((option) => option.value === this.guest.menu).label;
        this.discount = this._guests
            .getDiscountOptions()
            .find((option) => option.value === this.guest.discount).label;
    }
}
