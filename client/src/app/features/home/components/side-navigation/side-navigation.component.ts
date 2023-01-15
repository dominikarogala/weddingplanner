import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/core/store/state';
import { selectWeddingDate } from 'src/app/core/store/user-config';

@Component({
    selector: 'wp-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent {
    weddingDate$ = this._store.select(selectWeddingDate);

    constructor(private _store: Store<AppState>) {}
}
