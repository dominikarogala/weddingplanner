import { IGuest } from 'src/app/features/guests/guests.model';

export interface IGuestsState {
    guests: IGuest[];
}

export const initialGuestState: IGuestsState = {
    guests: [],
};
