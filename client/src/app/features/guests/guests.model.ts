import { IDialogMode } from 'src/app/shared/dialogs';

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
    isTransportNeeded: boolean;
    isAccomodationNeeded: boolean;
    discount: Discount;
    menu: Menu;
    sex?: Sex;
    age?: Age;
}

export interface IAddGuestDialog extends IDialogMode {
    guest: IGuest;
}
