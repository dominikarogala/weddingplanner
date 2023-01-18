import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared.module';
import { ICategoryElement } from '../../models';

@Component({
    selector: 'wp-table-category-element',
    standalone: true,
    imports: [CommonModule, SharedModule],
    templateUrl: './table-category-element.component.html',
    styleUrls: ['./table-category-element.component.scss'],
})
export class TableCategoryElementComponent {
    @Input() element: ICategoryElement;

    @Output() elementHeaderClicked: EventEmitter<boolean> = new EventEmitter();
    @Output() addNotes: EventEmitter<boolean> = new EventEmitter();
}
