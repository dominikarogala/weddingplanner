import { Component, OnInit } from '@angular/core';
import { ICategory } from './models/toDoList.model';

@Component({
    selector: 'wp-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
    categories: ICategory[] = [
        {
            name: 'Planowanie',
            tasks: [
                {
                    name: 'Wybierz datę ślubu',
                    endDate: '01-01-2022',
                    isFinished: false,
                    notes: 'gfdgfd gdf gdf g df g d',
                },
                {
                    name: 'Wybierz rodzaj ślubu',
                    endDate: '01-01-2022',
                    isFinished: true,
                    notes: 'gdfgdf g df gdf g df gd fg df gdfhgfhbdgfch n dtyxh bf',
                },
                {
                    name: 'Wybierz miejsce ślubu',
                    endDate: '01-01-2022',
                    isFinished: true,
                    notes: '',
                },
                {
                    name: 'Wybierz miejsce wesela',
                    endDate: '01-01-2022',
                    isFinished: false,
                    notes: '',
                },
            ],
        },
        {
            name: 'Formalności',
            tasks: [
                {
                    name: 'Poinformuj o urlopie w pracy',
                    endDate: '01-01-2022',
                    isFinished: false,
                    notes: '',
                },
            ],
        },
        { name: 'Ceremonia', tasks: [] },
        { name: 'Wesele', tasks: [] },
        { name: 'Zaproszenia', tasks: [] },
        { name: 'Kwiaty i dekoracje', tasks: [] },
        { name: 'Fotografia i wideo', tasks: [] },
        { name: 'Transport', tasks: [] },
        { name: 'Strój Panny Młodej', tasks: [] },
        { name: 'Miesiąc Miodowy', tasks: [] },
    ];

    constructor() {}

    ngOnInit(): void {}
}
