import * as mongoose from 'mongoose';
export interface Task extends mongoose.Document {
    name: string;
    endDate: string;
    isFinished: boolean;
    notes?: string;
}

export interface Category extends mongoose.Document {
    name: string;
    tasks: Task[];
}

export const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    endDate: { type: String, required: true },
    isFinished: { type: Boolean, required: true },
    notes: { type: String, required: false },
});

export const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    tasks: [
        {
            name: { type: String, required: true },
            endDate: { type: String, required: true },
            isFinished: { type: Boolean, required: true },
            notes: { type: String, required: false },
        },
    ],
});

export interface ICategory {
    id: string;
    name: string;
    tasks: ITask[];
}

export interface ITask {
    name: string;
    endDate: string;
    isFinished: boolean;
    id: string;
    notes: string;
}
