import { MiddlewareConsumer, Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { TenantAwareMiddleware } from 'src/tenant/tenant-aware.middleware';
import { TenantModule } from 'src/tenant/tenant.module';
import { UserConfigController } from './user-config.controller';
import { UserConfigSchema } from './user-config.model';
import { UserInfoService } from './user-config.service';

@Module({
    controllers: [UserConfigController],
    imports: [TenantModule, AuthModule],
    providers: [
        UserInfoService,
        {
            provide: 'USER_CONFIG_MODEL',
            useFactory: (connection: Connection) => connection.model('UserConfig', UserConfigSchema),
            inject: ['TENANT_CONNECTION'],
        },
    ],
})
export class UserConfigModule {
    configure(context: MiddlewareConsumer) {
        context.apply(TenantAwareMiddleware).forRoutes('/userconfig');
    }
}
