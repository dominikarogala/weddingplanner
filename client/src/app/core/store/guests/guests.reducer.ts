import { createReducer, on } from '@ngrx/store';
import { addNewGuestSuccess, loadGuestsSuccess } from './guests.action';
import { initialGuestState } from './guests.state';

export const guestsReducer = createReducer(
    initialGuestState,
    on(loadGuestsSuccess, (state, action) => ({
        ...state,
        groups: [...action.payload.groups],
    })),
    on(addNewGuestSuccess, (state, action) => ({
        ...state,
        groups: state.groups.map((group) => {
            if (group.id === action.groupId) {
                return {
                    ...group,
                    guests: [...group.guests, action.guest],
                };
            } else {
                return group;
            }
        }),
    }))
);
