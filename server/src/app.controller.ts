import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';

import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
	constructor(private readonly _authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post('login')
	login(@Request() req) {
		return this._authService.login(req.user);
	}

	@UseGuards(JwtAuthGuard)
	@Get('protected')
	getHello(@Request() req): string {
		return req.user;
	}
}