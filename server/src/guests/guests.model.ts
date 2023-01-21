import * as mongoose from 'mongoose';

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

export interface Guest extends mongoose.Document {
    name: string;
    menu: Menu;
    isTransportNeeded: boolean;
    isAccomodationNeeded: boolean;
    discount: Discount;
    sex?: Sex;
    age?: Age;
}

export const GuestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    menu: { type: Number, required: true },
    isTransportNeeded: { type: Boolean, required: true },
    isAccomodationNeeded: { type: Boolean, required: true },
    discount: { type: Number, required: true },
    sex: { type: Number, required: false },
    age: { type: Number, required: false },
});
