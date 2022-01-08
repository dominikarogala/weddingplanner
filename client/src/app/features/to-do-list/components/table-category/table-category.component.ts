import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/features/models/toDoList.model';

@Component({
    selector: 'wp-table-category',
    templateUrl: './table-category.component.html',
    styleUrls: ['./table-category.component.scss'],
})
export class TableCategoryComponent implements OnInit {
    @Input() category!: ICategory;

    panelOpenState = false;
    progress = 0;

    constructor() {}

    ngOnInit(): void {
        this.progress = this._calculateProgress();
        console.log(this.progress);
    }

    private _calculateProgress(): number {
        debugger;
        if (this.category.tasks.length < 1) {
            return 0;
        }

        const finishedTasks = this.category.tasks.filter(
            (task) => task.isFinished
        );

        return (finishedTasks.length / this.category.tasks.length) * 100;
    }
}
