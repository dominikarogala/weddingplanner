import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'wp-edition',
    templateUrl: './edition.component.html',
    styleUrls: ['./edition.component.scss'],
    standalone: true,
    imports: [SharedModule],
})
export class EditionComponent implements OnInit {
    @Output() editElement: EventEmitter<void> = new EventEmitter();
    @Output() deleteElement: EventEmitter<void> = new EventEmitter();

    isExpanded = false;

    constructor() {}

    ngOnInit(): void {}
}
