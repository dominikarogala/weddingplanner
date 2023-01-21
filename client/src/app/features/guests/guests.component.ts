import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadGuests, selectGuests } from 'src/app/core/store/guests';
import { AppState } from 'src/app/core/store/state';

@Component({
    selector: 'wp-guests',
    templateUrl: './guests.component.html',
    styleUrls: ['./guests.component.scss'],
})
export class GuestsComponent implements OnInit {
    guests$ = this._store.select(selectGuests);

    constructor(private _store: Store<AppState>) {}

    ngOnInit(): void {
        this._store.dispatch(loadGuests());
    }
}
