import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ICategory } from '../../models';
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'wp-table-category',
    standalone: true,
    imports: [CommonModule, SharedModule],
    templateUrl: './table-category.component.html',
    styleUrls: ['./table-category.component.scss'],
})
export class TableCategoryComponent {
    @Input() category: ICategory;
    @Output() categoryPanelClicked: EventEmitter<boolean> = new EventEmitter();
}
