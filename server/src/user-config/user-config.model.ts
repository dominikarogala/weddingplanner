import * as mongoose from 'mongoose';

export interface IUserConfig {
    weddingDate: string;
    brideName: string;
    groomName: string;
    budget?: number;
}

export interface UserConfig extends mongoose.Document {
    weddingDate: string;
    brideName: string;
    groomName: string;
    budget?: number;
}

export const UserConfigSchema = new mongoose.Schema({
    weddingDate: { type: String, required: true },
    brideName: { type: String, required: true },
    groomName: { type: String, required: true },
    budget: { type: Number, required: false },
});
