import { IBudgetState } from '../budget';
import { ITaskState } from '../task/task.state';
import { IUserConfig } from '../user-config';

export interface AppState {
    tasks: ITaskState;
    userConfig: IUserConfig;
    budget: IBudgetState;
}
