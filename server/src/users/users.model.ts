import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    uuid: { type: String, required: true },
});

export interface User extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    uuid: string;
    password?: string;
}

export class UserViewModel {
    userUuid: string;
    userName: string;
}
