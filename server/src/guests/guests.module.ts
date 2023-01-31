import { MiddlewareConsumer, Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { TenantAwareMiddleware } from 'src/tenant/tenant-aware.middleware';
import { TenantModule } from 'src/tenant/tenant.module';
import { GuestsController } from './guests.controller';
import { GuestSchema, GuestsGroupSchema } from './guests.model';
import { GuestsService } from './guests.service';

@Module({
    controllers: [GuestsController],
    imports: [TenantModule, AuthModule],
    providers: [
        GuestsService,
        {
            provide: 'GUESTS_GROUP_MODEL',
            useFactory: (connection: Connection) => connection.model('GuestsGroup', GuestsGroupSchema),
            inject: ['TENANT_CONNECTION'],
        },
    ],
})
export class GuestsModule {
    configure(context: MiddlewareConsumer) {
        context.apply(TenantAwareMiddleware).forRoutes('/guests');
    }
}
