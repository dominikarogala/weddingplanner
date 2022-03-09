import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { TenantAwareMiddleware } from 'src/tenant/tenant-aware.middleware';
import { TenantModule } from 'src/tenant/tenant.module';
import { UserSchema } from 'src/users/users.model';
import { TaskController } from './task.controller';
import { CategorySchema, TaskSchema } from './task.model';
import { TaskService } from './task.service';

@Module({
    controllers: [TaskController],
    imports: [TenantModule, AuthModule],
    providers: [
        TaskService,
        {
            provide: 'CATEGORY_MODEL',
            useFactory: (connection: Connection) => connection.model('Category', CategorySchema),
            inject: ['TENANT_CONNECTION'],
        },
    ],
})
export class TaskModule implements NestModule {
    configure(context: MiddlewareConsumer) {
        context.apply(TenantAwareMiddleware).forRoutes('/task');
    }
}
