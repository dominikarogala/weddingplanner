import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/features/models/toDoList.model';

@Component({
    selector: 'wp-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    @Input() categories: ICategory[] = [];

    constructor() {}

    ngOnInit(): void {}
}
