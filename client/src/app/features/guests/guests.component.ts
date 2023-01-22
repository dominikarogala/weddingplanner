import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { loadGuests, selectGuests } from 'src/app/core/store/guests';
import { AppState } from 'src/app/core/store/state';
import { DialogMode } from 'src/app/shared/dialogs';
import { AddGuestDialogComponent } from './add-guest-dialog/add-guest-dialog.component';
import { IGuest } from './guests.model';

@Component({
    selector: 'wp-guests',
    templateUrl: './guests.component.html',
    styleUrls: ['./guests.component.scss'],
})
export class GuestsComponent implements OnInit {
    guests$ = this._store.select(selectGuests);

    constructor(private _store: Store<AppState>, private _dialog: MatDialog) {}

    ngOnInit(): void {
        this._store.dispatch(loadGuests());
    }

    openAddGuestDiaog() {
        const dialogRef = this._dialog.open(AddGuestDialogComponent, {
            width: '30rem',
            data: { mode: DialogMode.Creation, guest: { name: '' } },
        });

        dialogRef.afterClosed().subscribe((newGuest: IGuest) => {
            if (!newGuest) {
                return;
            }

            // this._store.dispatch(
            //     addNewBudgetSpending({
            //         payload: {
            //             spending: newSpending,
            //             categoryId: this.category.id,
            //         },
            //     })
            // );
        });
    }
}
