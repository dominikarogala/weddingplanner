import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

import { IUserConfig, UserConfig } from './user-config.model';

@Injectable()
export class UserInfoService {
    constructor(@Inject('USER_CONFIG_MODEL') private readonly userConfigModel: Model<UserConfig>) {}

    async createUserConfig(config: UserConfig) {
        const newInfo = new this.userConfigModel({
            brideName: config.brideName,
            groomName: config.groomName,
            weddingDate: config.weddingDate,
        });

        const result = await newInfo.save();
        return result._id;
    }

    async getUserConfig(): Promise<IUserConfig> {
        let config;

        try {
            config = await this.userConfigModel.findOne().exec();
        } catch {
            throw new NotFoundException('Could not find a config.');
        }

        if (!config) {
            throw new NotFoundException('Could not find a config.');
        }

        return {
            weddingDate: config.weddingDate,
            brideName: config.brideName,
            groomName: config.groomName,
            budget: config.budget,
        };
    }
}
