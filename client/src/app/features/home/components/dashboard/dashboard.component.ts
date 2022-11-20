import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

import { AppState } from 'src/app/core/store/state';
import {
    addNewUserConfig,
    IUserConfig,
    loadUserConfig,
    selectUserConfig,
} from 'src/app/core/store/user-config';
import { UserConfigDialogComponent } from '../user-config-dialog/user-config-dialog.component';

@Component({
    selector: 'wp-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    userConfig$: Observable<IUserConfig>;

    constructor(private _store: Store<AppState>, private _dialog: MatDialog) {}

    ngOnInit(): void {
        this._store.dispatch(loadUserConfig());

        this.userConfig$ = this._store.select(selectUserConfig).pipe(
            tap((config) => {
                if (!config.isInitialConfigDone) {
                    this._openAddUserConfigDialog();
                }
            })
        );
    }

    private _openAddUserConfigDialog() {
        const data: IUserConfig = {
            isInitialConfigDone: false,
            groomName: '',
            brideName: '',
            weddingDate: '',
        };

        const dialogRef = this._dialog.open(UserConfigDialogComponent, {
            width: '32rem',
            disableClose: true,
            data,
        });

        dialogRef.afterClosed().subscribe((config: IUserConfig) => {
            config.isInitialConfigDone = true;

            this._store.dispatch(addNewUserConfig({ payload: { ...config } }));
        });
    }
}
