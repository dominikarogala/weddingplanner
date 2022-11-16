import { createReducer, on } from '@ngrx/store';

import { loadUserConfigSuccess } from './user-config.action';
import { initialUserConfigState } from './user-config.state';

export const userConfigReducer = createReducer(
    initialUserConfigState,
    on(loadUserConfigSuccess, (state, action) => ({
        ...state,
        ...action.payload,
    }))
);
