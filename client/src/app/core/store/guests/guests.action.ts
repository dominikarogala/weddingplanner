import { createAction, props } from '@ngrx/store';
import { IGuest } from 'src/app/features/guests/guests.model';

import { IGuestsState } from './guests.state';

export const loadGuests = createAction('[Guests] Load Guests');
export const loadGuestsSuccess = createAction(
    '[Guests] Load Guests Success',
    props<{ payload: IGuestsState }>()
);

export const addNewGuest = createAction(
    '[Guests] Add New Guest',
    props<{ payload: IGuest }>()
);
export const addNewGuestSuccess = createAction(
    '[Guests] Add New Guest Success',
    props<{ payload: IGuest }>()
);