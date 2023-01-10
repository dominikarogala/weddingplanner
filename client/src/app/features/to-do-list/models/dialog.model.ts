import { IDialogMode } from 'src/app/shared/dialogs';
import { ITask } from 'src/app/shared/models';

export interface ITaskDialogData extends IDialogMode {
    task: ITask;
}
