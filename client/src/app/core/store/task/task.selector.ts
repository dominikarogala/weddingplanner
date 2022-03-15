import { AppState } from '../state/app.state';

export const selectTasks = (state: AppState) => state.tasks.categories;
