import { IDialogMode } from 'src/app/shared/dialogs';
import { ICategory } from 'src/app/shared/models';

export enum Sex {
    male,
    female,
    unspecified,
}

export enum Age {
    infant,
    child,
    teenager,
    youngAdult,
    adult,
    middleAge,
    elderly,
}

export enum Menu {
    standard,
    vegetarian,
    vegan,
    kids,
}

export enum Discount {
    normal,
    free,
    child,
    staff,
}

export interface IGuest {
    name: string;
    isInvited: boolean;
    isConfirmed: boolean;
    isTransportNeeded: boolean;
    isAccomodationNeeded: boolean;
    discount: Discount;
    menu: Menu;
    sex?: Sex;
    age?: Age;
    id?: string;
}

export interface IAddGuestDialog extends IDialogMode {
    guest: IGuest;
}

export interface IGuestsGroup extends ICategory {
    guests: IGuest[];
    id?: string;
}
