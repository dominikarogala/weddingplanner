import { IGuestsGroup } from 'src/app/features/guests/guests.model';

export interface IGuestsState {
    groups: IGuestsGroup[];
}

export const initialGuestState: IGuestsState = {
    groups: [],
};
