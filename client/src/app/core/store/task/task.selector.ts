import { AppState } from '../state';

export const selectTasks = (state: AppState) => state.tasks.categories;
