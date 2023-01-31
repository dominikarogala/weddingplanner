import { Body, Controller, Get, Post } from '@nestjs/common';
import { IGuest } from './guests.model';
import { GuestsService } from './guests.service';

@Controller('guests')
export class GuestsController {
    constructor(private guest: GuestsService) {}

    @Get()
    async getGuests() {
        return await this.guest.getGuests();
    }

    @Post()
    async addNewGuest(@Body('groupId') groupId: string, @Body('guest') guest: IGuest) {
        return await this.guest.addNewGuest(groupId, guest);
    }

    @Post('group')
    async addNewGuestsGroup(@Body('groupName') groupName: string) {
        return await this.guest.addNewGuestsGroup(groupName);
    }
}
