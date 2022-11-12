import * as mongoose from 'mongoose';

export interface ITenant {
    tenantId: string;
}

export interface Tenant extends mongoose.Document {
    tenantId: string;
}

export const TenantSchema = new mongoose.Schema({
    tenantId: { type: String, required: true },
});
