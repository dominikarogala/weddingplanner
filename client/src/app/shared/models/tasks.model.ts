import { ICategory, ICategoryElement } from './category.model';

export interface ITask extends ICategoryElement {
    endDate: string;
    isFinished: boolean;
}

export class Task implements ITask {
    name: string;
    endDate: string;
    isOpened: boolean;
    isFinished: boolean;
    notes: string;
    id?: string;

    constructor() {
        this.name = '';
        this.endDate = '';
        this.isFinished = false;
        this.isOpened = false;
        this.notes = '';
    }
}

export interface ITaskCategory extends ICategory {
    tasks: ITask[];
}

export interface ITaskDTO {
    categoryId: string;
    task: ITask;
}
