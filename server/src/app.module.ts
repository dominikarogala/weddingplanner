import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TenantModule } from './tenant/tenant.module';
import { TaskModule } from './task/task.module';
import { BudgetModule } from './budget/budget.module';

@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost:27017/myapp'), UsersModule, AuthModule, TenantModule, TaskModule, BudgetModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
