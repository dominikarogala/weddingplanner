import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TenantAwareMiddleware implements NestMiddleware {
    constructor(private _jwtService: JwtService) {}

    async use(req: any, res: any, next: () => void) {
        const { headers } = req;
        const authorization = headers.authorization.replace('Bearer ', '');
        const token = this._jwtService.decode(authorization);
        const tenantId = token.sub;

        req['tenantId'] = tenantId;

        next();
    }
}
