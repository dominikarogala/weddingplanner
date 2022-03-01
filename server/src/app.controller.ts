import { Controller, Get, UseGuards, Request } from '@nestjs/common';

import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
    constructor() {}

    @UseGuards(JwtAuthGuard)
    @Get('hello')
    getHello(@Request() req): string {
        return 'HELLO WORLD';
    }
}
