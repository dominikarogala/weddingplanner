import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITenant } from '../tenant.model';

@Injectable()
export class TenantsService {
    constructor(@InjectModel('Tenant') private readonly _tenantModel: Model<ITenant>) {}

    async create(createTenant: ITenant): Promise<ITenant> {
        try {
            const dataToPersist = new this._tenantModel(createTenant);
            return await dataToPersist.save();
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async findById(name: string): Promise<ITenant> {
        return await this._tenantModel.findOne({ name });
    }
}
