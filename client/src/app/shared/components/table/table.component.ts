import { Component, Input, OnInit } from '@angular/core';

import { ICategory } from '../../models';

@Component({
    selector: 'wp-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    @Input() categories: ICategory[] = [];

    isExpanded = false;
    constructor() {}

    ngOnInit(): void {}
}
