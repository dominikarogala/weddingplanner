import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/features/to-do-list/models/tasks.model';

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
    }

    onDeleteTask(id: string): void {
        const index = this.category.tasks.findIndex((task) => task.id === id);

        if (index > -1) {
            this.category.tasks.splice(index, 1);
        }
    }

    private _calculateProgress(): number {
        if (this.category.tasks.length < 1) {
            return 0;
        }

        const finishedTasks = this.category.tasks.filter(
            (task) => task.isFinished
        );

        return (finishedTasks.length / this.category.tasks.length) * 100;
    }
}
