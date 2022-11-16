import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/core/store/state/app.state';
import { loadTasks, selectTasks } from 'src/app/core/store/task';

@Component({
    selector: 'wp-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
    categories$ = this._store.select(selectTasks);

    constructor(private _store: Store<AppState>) {}

    ngOnInit(): void {
        this._store.dispatch(loadTasks());
    }
}
