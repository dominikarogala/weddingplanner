import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserConfig } from './user-config.model';
import { UserInfoService } from './user-config.service';

@Controller('userconfig')
export class UserConfigController {
    constructor(private _userInfo: UserInfoService) {}

    @Post()
    async addUserConfig(@Body('userconfig') info: UserConfig) {
        return await this._userInfo.createUserConfig(info);
    }

    @Get()
    async getUserConfig() {
        return await this._userInfo.getUserConfig();
    }
}
