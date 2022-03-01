import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserViewModel } from 'src/users/users.model';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private _usersService: UsersService, private _jwtService: JwtService) {}

    async validateUser(email: string, password: string): Promise<UserViewModel> {
        const user = await this._usersService.findUser(email);

        if (!user) {
            return null;
        }

        const isPasswordCorrect = await this._usersService.checkIsPasswordCorrect(password, user.password);
        if (isPasswordCorrect) {
            let viewModel: UserViewModel = {
                userName: user.name,
                userUuid: user.uuid,
            };
            return viewModel;
        }

        return null;
    }

    async login(user: any) {
        const payload = { name: user.name, sub: user.id };

        return {
            access_token: this._jwtService.sign(payload),
        };
    }
}
