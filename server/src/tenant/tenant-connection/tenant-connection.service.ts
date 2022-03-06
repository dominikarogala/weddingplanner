import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Connection } from 'mongoose';
import { TenantsService } from '../tenants/tenants.service';
import * as mongoose from 'mongoose';
import { ITenant } from '../tenant.model';

@Injectable()
export class TenantConnectionService {
    private _tenantId: string;

    constructor(private _tenantService: TenantsService) {}

    set tenantId(value: string) {
        this._tenantId = value;
    }

    async getConnection(): Promise<Connection> {
        const tenant = await this._tenantService.findById(this._tenantId);

        if (!tenant) {
            throw new HttpException('Tenant not found', HttpStatus.NOT_FOUND);
        }

        const connections: Connection[] = mongoose.connections;

        const foundConn = connections.find((con: Connection) => {
            return con.name === `tenantDB_${tenant.tenantId}`;
        });

        if (!!foundConn && foundConn.readyState === 1) {
            return foundConn;
        }

        return await this._createConnection(tenant);
    }

    private async _createConnection(tenant: ITenant): Promise<Connection> {
        return await mongoose.createConnection('mongodb://localhost:27017/' + tenant.tenantId);
    }
}
