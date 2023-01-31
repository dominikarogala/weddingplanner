import { createReducer, on } from '@ngrx/store';

import {
    addNewGuestsGroupSuccess,
    addNewGuestSuccess,
    changeGuestsGroupExpansionState,
    loadGuestsSuccess,
} from './guests.action';
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
                    isOpened: false,
                    guests: [...group.guests, action.guest],
                };
            } else {
                return group;
            }
        }),
    })),
    on(addNewGuestsGroupSuccess, (state, action) => ({
        ...state,
        groups: [
            ...state.groups,
            {
                name: action.groupName,
                id: action.groupId,
                isOpened: false,
                guests: [],
            },
        ],
    })),
    on(changeGuestsGroupExpansionState, (state, action) => ({
        ...state,
        groups: state.groups.map((group) => {
            if (group.id === action.groupId) {
                return {
                    ...group,
                    isOpened: action.state,
                };
            } else {
                return group;
            }
        }),
    }))
);
