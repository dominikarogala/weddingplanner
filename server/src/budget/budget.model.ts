import * as mongoose from 'mongoose';

export interface BudgetCategory extends mongoose.Document {
    name: string;
    spendings: Spending[];
}

export interface Spending extends mongoose.Document {
    name: string;
    price: number;
    moneyAlreadyPayed: number;
    notes: string;
}

export const SpendingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    moneyAlreadyPayed: { type: Number, required: false },
    notes: { type: String, required: false },
});

export const BudgetCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    spendings: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true },
            moneyAlreadyPayed: { type: Number, required: false },
            notes: { type: String, required: false },
        },
    ],
});

export interface IBudgetInfo {
    budgetSpent: number;
    budgetLeft: number;
    categories: IBudgetCategory[];
}

export interface IBudgetCategory {
    name: string;
    spendings: ISpending[];
}

export interface ISpending {
    name: string;
    price: number;
    moneyAlreadyPayed: number;
    notes: string;
}
