import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { skipWhile } from 'rxjs';

import { AppState } from 'src/app/core/store/state';
import {
    IUserConfig,
    selectIsInitialConfigDone,
} from 'src/app/core/store/user-config';
import { UserConfigDialogComponent } from '../user-config-dialog/user-config-dialog.component';

@Component({
    selector: 'wp-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor(private _store: Store<AppState>, private _dialog: MatDialog) {}

    ngOnInit(): void {
        this._store
            .select(selectIsInitialConfigDone)
            .pipe(skipWhile((isInitial) => isInitial))
            .subscribe(() => {
                this._openAddUserConfigDialog();
            });
    }

    private _openAddUserConfigDialog() {
        const dialogRef = this._dialog.open(UserConfigDialogComponent, {
            width: '32rem',
            disableClose: true,
            data: {
                isInitialConfigDone: false,
                groomName: '',
                brideName: '',
                weddingDate: '',
            } as IUserConfig,
        });

        dialogRef.afterClosed().subscribe((amount: string) => {
            // TODO: set config
        });
    }
}
