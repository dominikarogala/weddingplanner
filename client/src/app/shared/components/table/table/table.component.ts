import { Component, Input } from '@angular/core';

@Component({
    selector: 'wp-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent {
    @Input() isElementsListEmpty = true;

    isExpanded = false;
}
