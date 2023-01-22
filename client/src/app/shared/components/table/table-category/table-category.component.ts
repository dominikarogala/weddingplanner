import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICategory } from '../../../models';

@Component({
    selector: 'wp-table-category',
    templateUrl: './table-category.component.html',
    styleUrls: ['./table-category.component.scss'],
})
export class TableCategoryComponent {
    @Input() category: ICategory;
    @Output() categoryPanelClicked: EventEmitter<boolean> = new EventEmitter();
}
