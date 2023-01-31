import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ICategoryElement } from 'src/app/shared/models';

@Component({
    selector: 'wp-table-category-element',
    templateUrl: './table-category-element.component.html',
    styleUrls: ['./table-category-element.component.scss'],
})
export class TableCategoryElementComponent {
    @Input() element: ICategoryElement;

    @Output() elementHeaderClicked: EventEmitter<boolean> = new EventEmitter();
    @Output() addNotes: EventEmitter<boolean> = new EventEmitter();
}
