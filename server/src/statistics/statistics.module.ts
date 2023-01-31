import { MiddlewareConsumer, Module } from '@nestjs/common';
import { Connection } from 'mongoose';

import { AuthModule } from 'src/auth/auth.module';
import { BudgetCategorySchema } from 'src/budget/budget.model';
import { BudgetService } from 'src/budget/budget.service';
import { GuestsGroupSchema } from 'src/guests/guests.model';
import { GuestsService } from 'src/guests/guests.service';
import { CategorySchema } from 'src/task/task.model';
import { TaskService } from 'src/task/task.service';
import { TenantAwareMiddleware } from 'src/tenant/tenant-aware.middleware';
import { TenantModule } from 'src/tenant/tenant.module';
import { UserConfigSchema } from 'src/user-config/user-config.model';
import { UserInfoService } from 'src/user-config/user-config.service';
import { StatisticsController } from './statistics.controller';
import { StatisticsService } from './statistics.service';

// TODO: nie można zaimportować całego modułu ??
@Module({
    controllers: [StatisticsController],
    providers: [
        StatisticsService,
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
        TaskService,
        {
            provide: 'CATEGORY_MODEL',
            useFactory: (connection: Connection) => connection.model('Category', CategorySchema),
            inject: ['TENANT_CONNECTION'],
        },
        GuestsService,
        {
            provide: 'GUESTS_GROUP_MODEL',
            useFactory: (connection: Connection) => connection.model('GuestsGroup', GuestsGroupSchema),
            inject: ['TENANT_CONNECTION'],
        },
    ],
    imports: [TenantModule, AuthModule],
})
export class StatisticsModule {
    configure(context: MiddlewareConsumer) {
        context.apply(TenantAwareMiddleware).forRoutes('/statistics');
    }
}
