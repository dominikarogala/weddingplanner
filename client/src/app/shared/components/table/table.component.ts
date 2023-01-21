import { Component, Input } from '@angular/core';

import { SharedModule } from '../../shared.module';

@Component({
    selector: 'wp-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    standalone: true,
    imports: [SharedModule],
})
export class TableComponent {
    @Input() elements: any[] = [];

    isExpanded = false;
}
