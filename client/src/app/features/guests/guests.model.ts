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
    menu: Menu;
    isTransportNeeded: boolean;
    isAccomodationNeeded: boolean;
    discount: Discount;
    sex?: Sex;
    age?: Age;
}
