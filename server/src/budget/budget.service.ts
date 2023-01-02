import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { BudgetCategory, IBudgetInfo } from './budget.model';

@Injectable()
export class BudgetService {
    constructor(@Inject('BUDGET_MODEL') private readonly budgetCategoryModel: Model<BudgetCategory>) {}

    async getBudgetInfo(): Promise<IBudgetInfo> {
        const budgetCategories = await this.budgetCategoryModel.find().exec();
        console.log(budgetCategories);
        const budgetInfo: IBudgetInfo = {
            budgetLeft: 0,
            budgetSpent: 0,
            categories: budgetCategories.map(category => ({
                name: category.name,
                id: category._id,
                spendings: category.spendings.map(spending => ({
                    id: spending._id,
                    name: spending.name,
                    price: spending.price,
                    notes: spending.notes,
                    moneyAlreadyPayed: spending.moneyAlreadyPayed,
                })),
            })),
        };

        return budgetInfo;
    }

    async addNewCategory(categoryName: string) {
        const newBudgetCategory = new this.budgetCategoryModel({
            name: categoryName,
            spendings: [],
        });

        const result = await newBudgetCategory.save();
        return result._id;
    }
}
