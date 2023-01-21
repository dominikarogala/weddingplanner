import { AppState } from '../state';

export const selectGuests = (state: AppState) => state?.guests?.guests;
