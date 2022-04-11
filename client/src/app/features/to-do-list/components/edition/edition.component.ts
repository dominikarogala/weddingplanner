import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'wp-edition',
    templateUrl: './edition.component.html',
    styleUrls: ['./edition.component.scss'],
})
export class EditionComponent implements OnInit {
    @Output() editElement: EventEmitter<void> = new EventEmitter();
    @Output() deleteElement: EventEmitter<void> = new EventEmitter();

    isExpanded = false;

    constructor() {}

    ngOnInit(): void {}
}
