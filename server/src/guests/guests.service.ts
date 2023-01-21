import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { Guest, IGuest } from './guests.model';

@Injectable()
export class GuestsService {
    constructor(@Inject('GUEST_MODEL') private readonly guestModel: Model<Guest>) {}

    async getGuests(): Promise<IGuest[]> {
        const guests = await this.guestModel.find().exec();
        const result: IGuest[] = guests.map(guest => ({
            name: guest.name,
            menu: guest.menu,
            isTransportNeeded: guest.isTransportNeeded,
            isAccomodationNeeded: guest.isAccomodationNeeded,
            discount: guest.discount,
            sex: guest.sex,
            age: guest.age,
        }));

        return result;
    }

    async addNewGuest(guest: IGuest): Promise<string> {
        const newGuest = new this.guestModel({
            ...guest,
        });

        const result = await newGuest.save();
        return result.id;
    }
}
