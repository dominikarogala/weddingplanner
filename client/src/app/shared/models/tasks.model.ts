export interface ITask {
    name: string;
    endDate: string;
    isFinished: boolean;
    isOpened: boolean;
    notes: string;
    id?: string;
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

export interface ICategory {
    name: string;
    tasks: ITask[];
    isOpened: boolean;
    id?: string;
}

export interface ITaskDTO {
    categoryId: string;
    task: ITask;
}
