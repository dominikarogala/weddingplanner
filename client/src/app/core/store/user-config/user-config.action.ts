import { createAction, props } from '@ngrx/store';

import { IUserConfig } from './user-config.state';

export const loadUserConfig = createAction('[UserConfig] Load User Config');
export const loadUserConfigSuccess = createAction(
    '[UserConfig] Load User Config Success',
    props<{ payload: IUserConfig }>()
);
export const loadUserConfigNotFound = createAction(
    '[UserConfig] Load User Config Not Found',
    props<{ payload: IUserConfig }>()
);

export const addNewUserConfig = createAction(
    '[UserConfig] Add New User Config',
    props<{ payload: IUserConfig }>()
);
export const addNewUserConfigSuccess = createAction(
    '[UserConfig] Add New User Config Success',
    props<{ payload: IUserConfig }>()
);

export const updateUserConfig = createAction(
    '[UserConfig] Update User Config',
    props<{ payload: Partial<IUserConfig> }>()
);
export const updateUserConfigSuccess = createAction(
    '[UserConfig] Update User Config Success',
    props<{ payload: IUserConfig }>()
);
