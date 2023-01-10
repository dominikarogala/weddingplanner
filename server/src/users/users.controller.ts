import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private _users: UsersService) {}

    @Post()
    async createUser(@Body('name') userName, @Body('email') userEmail: string, @Body('password') userPassword: string) {
        await this._users.addNewUser(userName, userEmail, userPassword);
    }
}
