import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { Model } from 'mongoose';

import * as bcrypt from 'bcrypt';

import { UserValidator } from 'src/shared/validators/user.validator';
import { User } from './users.model';
import { Tenant } from 'src/tenant/tenant.model';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        @InjectModel('Tenant') private readonly tenantmodel: Model<Tenant>,
        private userValidator: UserValidator,
    ) {}

    async addNewUser(name: string, email: string, password: string) {
        this._validateEmail(email);
        await this._checkUserExists(email);

        const newUser = new this.userModel({
            name,
            password: await this._createHash(password),
            email,
            uuid: randomUUID(),
        });

        const newTenant = new this.tenantmodel({
            tenantId: newUser.uuid,
        });

        await newTenant.save();
        await newUser.save();
    }

    async findUser(email: string): Promise<User> {
        const user = await this.userModel.findOne({ email });
        return user;
    }

    async checkIsPasswordCorrect(password, hash) {
        return await bcrypt.compare(password, hash);
    }

    private async _createHash(password: string): Promise<string> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }

    private _validateEmail(email: string) {
        const matches = this.userValidator.validateEmail(email);

        if (!matches) {
            throw new BadRequestException({ message: 'incorrect email' });
        }
    }

    private async _checkUserExists(email: string) {
        const user = await this.userModel.exists({ email });

        if (user) {
            throw new BadRequestException('user exists');
        }
    }
}
