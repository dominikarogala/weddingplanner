import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { Connection } from 'mongoose';

import { AuthModule } from 'src/auth/auth.module';
import { TenantAwareMiddleware } from 'src/tenant/tenant-aware.middleware';
import { TenantModule } from 'src/tenant/tenant.module';
import { UserConfigSchema } from 'src/user-config/user-config.model';
import { UserInfoService } from 'src/user-config/user-config.service';
import { BudgetController } from './budget.controller';
import { BudgetCategorySchema } from './budget.model';
import { BudgetService } from './budget.service';

@Module({
    controllers: [BudgetController],
    providers: [
        BudgetService,
        UserInfoService,
        {
            provide: 'BUDGET_MODEL',
            useFactory: (connection: Connection) => connection.model('BudgetCategory', BudgetCategorySchema),
            inject: ['TENANT_CONNECTION'],
        },
        {
            provide: 'USER_CONFIG_MODEL',
            useFactory: (connection: Connection) => connection.model('UserConfig', UserConfigSchema),
            inject: ['TENANT_CONNECTION'],
        },
    ],
    imports: [TenantModule, AuthModule],
})
export class BudgetModule implements NestModule {
    configure(context: MiddlewareConsumer) {
        context.apply(TenantAwareMiddleware).forRoutes('/budget');
    }
}
