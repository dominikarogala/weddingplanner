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
    async addNewGuest(@Body('guest') guest: IGuest) {
        return await this.guest.addNewGuest(guest);
    }
}
