import { AppState } from '../state';

export const selectGuestsGroups = (state: AppState) => state?.guests?.groups;
