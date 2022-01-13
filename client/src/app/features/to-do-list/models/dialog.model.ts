import { ITask, Task } from './tasks.model';

export const enum TaskDialogMode {
    Creation,
    Edition,
}

export interface ITaskDialogData {
    mode: TaskDialogMode;
    task: ITask;
}

export class TaskDialogData implements ITaskDialogData {
    mode: TaskDialogMode;
    task: ITask;

    constructor() {
        this.mode = TaskDialogMode.Creation;
        this.task = new Task();
    }
}
