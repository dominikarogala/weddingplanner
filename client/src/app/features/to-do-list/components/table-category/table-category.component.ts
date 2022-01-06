import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/features/models/toDoList.model';

@Component({
    selector: 'wp-table-category',
    templateUrl: './table-category.component.html',
    styleUrls: ['./table-category.component.scss'],
})
export class TableCategoryComponent implements OnInit {
    @Input() category!: ICategory;

    panelOpenState = false;

    constructor() {}

    ngOnInit(): void {}
}
