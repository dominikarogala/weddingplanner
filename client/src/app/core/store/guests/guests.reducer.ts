import { createReducer, on } from '@ngrx/store';
import { addNewGuestSuccess, loadGuestsSuccess } from './guests.action';
import { initialGuestState } from './guests.state';

export const guestsReducer = createReducer(
    initialGuestState,
    on(loadGuestsSuccess, (state, action) => ({
        ...state,
        guests: [...action.payload.guests],
    })),
    on(addNewGuestSuccess, (state, action) => ({
        guests: [...state.guests, action.payload],
    }))
);
