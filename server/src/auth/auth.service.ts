import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
	constructor(
		private _usersService: UsersService,
		private _jwtService: JwtService,
	) {}

	async validateUser(username: string, password: string): Promise<any> {
		// const user = await this._usersService.findOne(username);

		// if (user && user.password === password) {
		// 	const { password, username, ...rest } = user;
		// 	return rest;
		// }

		return null;
	}

	async login(user: any) {
		const payload = { name: user.name, sub: user.id };

		return {
			access_token: this._jwtService.sign(payload),
		};
	}
}
