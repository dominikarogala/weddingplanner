import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/features/models/toDoList.model';

@Component({
    selector: 'wp-table-element',
    templateUrl: './table-element.component.html',
    styleUrls: ['./table-element.component.scss'],
})
export class TableElementComponent implements OnInit {
    @Input() task!: ITask;

    isDescriptionVisible = false;

    constructor() {}

    ngOnInit(): void {}
}
