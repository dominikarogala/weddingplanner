import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/core/store/state';
import { loadUserConfig } from 'src/app/core/store/user-config';

@Component({
    selector: 'wp-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(private _store: Store<AppState>) {}

    ngOnInit(): void {
        this._store.dispatch(loadUserConfig());
    }
}
