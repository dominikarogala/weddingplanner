import { createSelector } from '@ngrx/store';

import { AppState } from '../state';
import { IUserConfig } from './user-config.state';

export const selectUserConfig = (state: AppState) => state.userConfig;

export const selectIsInitialConfigDone = createSelector(
    selectUserConfig,
    (state: IUserConfig) => state.isInitialConfigDone
);
