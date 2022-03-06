import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TenantAwareMiddleware implements NestMiddleware {
    async use(req: any, res: any, next: () => void) {
        const { headers } = req;
        const tenantId = 'testa123';

        req['tenantId'] = tenantId;

        next();
    }
}
