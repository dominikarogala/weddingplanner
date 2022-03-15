import { ITask, Task } from '../../../shared/models/tasks.model';

export const enum DialogMode {
    Creation,
    Edition,
}
interface IDialogMode {
    mode: DialogMode;
}
export interface ITaskDialogData extends IDialogMode {
    task: ITask;
}

export interface ICategoryDialogData extends IDialogMode {
    categoryName: string;
}
