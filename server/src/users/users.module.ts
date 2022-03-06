import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ValidatorsModule } from 'src/shared/validators/validators.module';
import { UserSchema } from './users.model';
import { Connection } from 'mongoose';
import { TenantAwareMiddleware } from 'src/tenant/tenant-aware.middleware';
import { TenantModule } from 'src/tenant/tenant.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TenantSchema } from 'src/tenant/tenant.model';

@Module({
    providers: [
        UsersService,
        // {
        //     provide: 'USER_MODEL',
        //     useFactory: (connection: Connection) => connection.model('User', UserSchema),
        //     inject: ['TENANT_CONNECTION'],
        // },
    ],
    exports: [UsersService],
    controllers: [UsersController],
    imports: [
        ValidatorsModule,
        // TenantModule,
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
        MongooseModule.forFeature([{ name: 'Tenant', schema: TenantSchema }]),
    ],
})
export class UsersModule {}
// export class UsersModule implements NestModule {
// configure(context: MiddlewareConsumer) {
//     context.apply(TenantAwareMiddleware).forRoutes('/users');
// }
