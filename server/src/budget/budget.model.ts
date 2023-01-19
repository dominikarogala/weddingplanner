import * as mongoose from 'mongoose';

export interface BudgetCategory extends mongoose.Document {
    name: string;
    spendings: Spending[];
}

export interface Spending extends mongoose.Document {
    name: string;
    price: number;
    moneyAlreadyPaied: number;
    notes: string;
}

export const SpendingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    moneyAlreadyPaied: { type: Number, required: true, default: 0 },
    notes: { type: String, required: false },
});

export const BudgetCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    spendings: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true, default: 0 },
            moneyAlreadyPaied: { type: Number, required: true, default: 0 },
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
    id: string;
    name: string;
    price: number;
    moneyAlreadyPaied: number;
    notes: string;
}
