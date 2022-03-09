import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ValidatorsModule } from 'src/shared/validators/validators.module';
import { UserSchema } from './users.model';
import { MongooseModule } from '@nestjs/mongoose';
import { TenantSchema } from 'src/tenant/tenant.model';

@Module({
    providers: [UsersService],
    exports: [UsersService],
    controllers: [UsersController],
    imports: [ValidatorsModule, MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), MongooseModule.forFeature([{ name: 'Tenant', schema: TenantSchema }])],
})
export class UsersModule {}
