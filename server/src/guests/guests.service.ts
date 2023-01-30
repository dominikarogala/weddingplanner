import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

import { Guest, GuestsGroup, IGuest, IGuestsGroup } from './guests.model';

@Injectable()
export class GuestsService {
    constructor(@Inject('GUESTS_GROUP_MODEL') private readonly guestsGroupModel: Model<GuestsGroup>) {}

    async getGuests(): Promise<IGuestsGroup[]> {
        const guests = await this.guestsGroupModel.find().exec();
        const result: IGuestsGroup[] = guests.map(group => ({
            id: group._id,
            name: group.name,
            guests: group.guests.map(guest => ({
                name: guest.name,
                menu: guest.menu,
                isInvited: guest.isInvited,
                isConfirmed: guest.isConfirmed,
                isTransportNeeded: guest.isTransportNeeded,
                isAccomodationNeeded: guest.isAccomodationNeeded,
                discount: guest.discount,
                sex: guest.sex,
                age: guest.age,
            })),
        }));

        return result;
    }

    async addNewGuest(groupId: string, guest: IGuest): Promise<string> {
        debugger;
        const group = await this._findGroup(groupId);
        const index: number = group.guests.push(guest);
        const result: GuestsGroup = await group.save();

        return result.guests[index - 1]._id;
    }

    async addNewGuestsGroup(groupName: string) {
        const newGroup = new this.guestsGroupModel({
            name: groupName,
            guests: [],
        });

        const result = await newGroup.save();
        return result._id;
    }

    private async _findGroup(groupId: string): Promise<any> {
        let category;

        try {
            category = await this.guestsGroupModel.findById(groupId);
        } catch (error) {
            throw new NotFoundException('Could not find a guests group.');
        }

        return category;
    }
}
