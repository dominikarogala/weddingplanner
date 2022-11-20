import { createReducer, on } from '@ngrx/store';

import {
    addNewUserConfigSuccess,
    loadUserConfigNotFound,
    loadUserConfigSuccess,
} from './user-config.action';
import { initialUserConfigState } from './user-config.state';

export const userConfigReducer = createReducer(
    initialUserConfigState,
    on(loadUserConfigSuccess, (state, action) => ({
        ...state,
        ...action.payload,
    })),
    on(loadUserConfigNotFound, (state, action) => ({
        ...state,
        ...action.payload,
    })),
    on(addNewUserConfigSuccess, (state, action) => ({
        ...state,
        ...action.payload,
    }))
);
