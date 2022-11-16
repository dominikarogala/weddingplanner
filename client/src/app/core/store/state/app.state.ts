import { ITaskState } from '../task';
import { IUserConfig } from '../user-config';

export interface AppState {
    tasks: ITaskState;
    userConfig: IUserConfig;
}
