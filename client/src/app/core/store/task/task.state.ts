import { ITaskCategory } from 'src/app/shared/models';

export interface ITaskState {
    categories: ITaskCategory[];
}

export const initialTaskState: ITaskState = {
    categories: [] as ITaskCategory[],
};
