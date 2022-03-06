import { Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { TenantConnectionService } from './tenant-connection/tenant-connection.service';
import * as mongoose from 'mongoose';

export const TenantConnectionFactory = [
    {
        provide: 'TENANT_CONTEXT',
        scope: Scope.REQUEST,
        useFactory: (req: Request): ITenantContext => {
            const { tenantId } = req as any;
            return new TenantContext(tenantId);
        },
        inject: [REQUEST],
    },
    {
        provide: 'TENANT_CONNECTION',
        useFactory: async (context: ITenantContext, connection: TenantConnectionService): Promise<mongoose.Connection> => {
            connection.tenantId = context.tenantId;
            return await connection.getConnection();
        },
        inject: ['TENANT_CONTEXT', TenantConnectionService],
    },
];

export interface ITenantContext {
    tenantId: string;
}

export class TenantContext implements ITenantContext {
    tenantId: string;

    constructor(id: string) {
        this.tenantId = id;
    }
}
