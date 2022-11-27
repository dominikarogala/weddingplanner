import { Body, Controller, Get, Post, Put } from '@nestjs/common';

import { UserConfig } from './user-config.model';
import { UserInfoService } from './user-config.service';

@Controller('userconfig')
export class UserConfigController {
    constructor(private _userInfo: UserInfoService) {}

    @Post()
    async addUserConfig(@Body('userconfig') config: UserConfig) {
        return await this._userInfo.createUserConfig(config);
    }

    @Get()
    async getUserConfig() {
        return await this._userInfo.getUserConfig();
    }

    @Put()
    async updateUserConfig(@Body('userconfig') config: UserConfig) {
        return await this._userInfo.updateUserConfig(config);
    }
}
