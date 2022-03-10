import * as mongoose from 'mongoose';
export interface Task extends mongoose.Document {
    name: string;
    endDate: string;
    isFinished: boolean;
    notes: string;
}

export interface Category extends mongoose.Document {
    name: string;
    tasks: Task[];
}

export const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    endDate: { type: String, required: true },
    isFinished: { type: Boolean, required: true },
    notes: { type: String, required: true },
});

export const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    tasks: [
        {
            name: { type: String, required: true },
            endDate: { type: String, required: true },
            isFinished: { type: Boolean, required: true },
            notes: { type: String, required: true },
        },
    ],
});
