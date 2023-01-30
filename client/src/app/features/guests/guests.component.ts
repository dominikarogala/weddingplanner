import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import {
    addNewGuestsGroup,
    loadGuests,
    selectGuestsGroups,
} from 'src/app/core/store/guests';
import { AppState } from 'src/app/core/store/state';
import { GuestCategories } from 'src/app/shared/constants';
import {
    CategoryDialogComponent,
    DialogMode,
    ICategoryDialogData,
} from 'src/app/shared/dialogs';
import { IGuestsGroup } from './guests.model';

@Component({
    selector: 'wp-guests',
    templateUrl: './guests.component.html',
    styleUrls: ['./guests.component.scss'],
})
export class GuestsComponent implements OnInit {
    guestsGroups$ = this._store.select(selectGuestsGroups);

    constructor(private _store: Store<AppState>, private _dialog: MatDialog) {}

    ngOnInit(): void {
        this._store.dispatch(loadGuests());
    }

    openAddGuestsGroupDialog(): void {
        const dialogData: ICategoryDialogData = {
            mode: DialogMode.Creation,
            title: 'guests.addNewGroup',
            categoryName: '',
            options: GuestCategories,
        };

        const dialogRef = this._dialog.open(CategoryDialogComponent, {
            width: '30rem',
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((categoryName: string) => {
            if (!!categoryName) {
                this._store.dispatch(
                    addNewGuestsGroup({ groupName: categoryName })
                );
            }
        });
    }

    identifierFn(index: number, item: IGuestsGroup): string {
        return item.id;
    }
}
