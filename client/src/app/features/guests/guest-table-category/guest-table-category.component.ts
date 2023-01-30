import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { addNewGuest } from 'src/app/core/store/guests';
import { AppState } from 'src/app/core/store/state';
import { DialogMode } from 'src/app/shared/dialogs';
import { AddGuestDialogComponent } from '../add-guest-dialog/add-guest-dialog.component';
import { IGuest, IGuestsGroup } from '../guests.model';

@Component({
    selector: 'wp-guest-table-category',
    templateUrl: './guest-table-category.component.html',
    styleUrls: ['./guest-table-category.component.scss'],
})
export class GuestTableCategoryComponent {
    @Input() group: IGuestsGroup;

    constructor(private _store: Store<AppState>, private _dialog: MatDialog) {}

    openAddGuestDialog(): void {
        const dialogRef = this._dialog.open(AddGuestDialogComponent, {
            width: '30rem',
            data: { mode: DialogMode.Creation, guest: { name: '' } },
        });

        dialogRef.afterClosed().subscribe((newGuest: IGuest) => {
            if (!newGuest) {
                return;
            }

            this._store.dispatch(
                addNewGuest({ groupId: this.group.id, guest: newGuest })
            );
        });
    }

    onCategoryPanelClick(event: any): void {}
    deleteCategory(): void {}

    editCategory(): void {}
}
