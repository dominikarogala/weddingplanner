import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TenantsService } from './tenants/tenants.service';
import { TenantConnectionService } from './tenant-connection/tenant-connection.service';
import { TenantSchema } from './tenant.model';
import { TenantConnectionFactory } from './tenant.factory';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    providers: [TenantsService, TenantConnectionService, ...TenantConnectionFactory],
    imports: [MongooseModule.forFeature([{ name: 'Tenant', schema: TenantSchema }]), AuthModule],
    exports: [...TenantConnectionFactory],
})
export class TenantModule {}
