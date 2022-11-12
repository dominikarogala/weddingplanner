import { ICategory } from 'src/app/shared/models';

export interface ITaskState {
    categories: ICategory[];
}

export const initialTaskState: ITaskState = {
    categories: [],
};
