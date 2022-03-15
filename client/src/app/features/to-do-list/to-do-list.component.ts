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
    // categories: ICategory[] = [
    //     {
    //         name: 'Planowanie',
    //         tasks: [
    //             {
    //                 id: '1',
    //                 name: 'Wybierz datę ślubu',
    //                 endDate: '01-01-2022',
    //                 isFinished: false,
    //                 notes: 'gfdgfd gdf gdf g df g d',
    //             },
    //             {
    //                 id: '2',
    //                 name: 'Wybierz rodzaj ślubu',
    //                 endDate: '01-01-2022',
    //                 isFinished: true,
    //                 notes: 'gdfgdf g df gdf g df gd fg df gdfhgfhbdgfch n dtyxh bf',
    //             },
    //             {
    //                 id: '3',
    //                 name: 'Wybierz miejsce ślubu',
    //                 endDate: '01-01-2022',
    //                 isFinished: true,
    //                 notes: '',
    //             },
    //             {
    //                 id: '4',
    //                 name: 'Wybierz miejsce wesela',
    //                 endDate: '01-01-2022',
    //                 isFinished: false,
    //                 notes: '',
    //             },
    //         ],
    //     },
    //     {
    //         name: 'Formalności',
    //         tasks: [
    //             {
    //                 id: 'dfw3',
    //                 name: 'Poinformuj o urlopie w pracy',
    //                 endDate: '01-01-2022',
    //                 isFinished: false,
    //                 notes: '',
    //             },
    //         ],
    //     },
    //     { name: 'Ceremonia', tasks: [] },
    //     { name: 'Wesele', tasks: [] },
    //     { name: 'Zaproszenia', tasks: [] },
    //     { name: 'Kwiaty i dekoracje', tasks: [] },
    //     { name: 'Fotografia i wideo', tasks: [] },
    //     { name: 'Transport', tasks: [] },
    //     { name: 'Strój Panny Młodej', tasks: [] },
    //     { name: 'Miesiąc Miodowy', tasks: [] },
    // ];

    categories$ = this._store.select(selectTasks);

    constructor(private _store: Store<AppState>) {}

    ngOnInit(): void {
        this._store.dispatch(loadTasks());
    }
}
