export interface ITask {
    name: string;
    endDate: string;
    isFinished: boolean;
    notes: string;
    id?: string;
}

export class Task implements ITask {
    name: string;
    endDate: string;
    isFinished: boolean;
    notes: string;
    id?: string;

    constructor() {
        this.name = '';
        this.endDate = '';
        this.isFinished = false;
        this.notes = '';
    }
}

export interface ICategory {
    name: string;
    tasks: ITask[];
    id?: string;
}

export interface ITaskDTO {
    categoryId: string;
    task: ITask;
}
