import { Component, Input, OnInit } from '@angular/core';

import { ICategory } from '../../models';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'wp-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    standalone: true,
    imports: [SharedModule],
})
export class TableComponent implements OnInit {
    @Input() categories: ICategory[] = [];

    isExpanded = false;
    constructor() {}

    ngOnInit(): void {}
}
