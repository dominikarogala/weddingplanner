import { createAction, props } from '@ngrx/store';

import { IUserConfig } from './user-config.state';

export const loadUserConfig = createAction('[UserConfig] Load User Config');
export const loadUserConfigSuccess = createAction(
    '[UserConfig] Load User Config Success',
    props<{ payload: IUserConfig }>()
);
