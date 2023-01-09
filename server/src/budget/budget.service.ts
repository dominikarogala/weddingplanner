import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

import { BudgetCategory, IBudgetInfo, ISpending } from './budget.model';

@Injectable()
export class BudgetService {
    constructor(@Inject('BUDGET_MODEL') private readonly budgetCategoryModel: Model<BudgetCategory>) {}

    async getBudgetInfo(): Promise<IBudgetInfo> {
        const budgetCategories = await this.budgetCategoryModel.find().exec();
        const budgetInfo: IBudgetInfo = {
            budgetSpent: 0,
            budgetLeft: 0,
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

    async addNewSpending(categoryId: string, spending: ISpending) {
        const category = await this._findCategory(categoryId);
        const index: number = category.spendings.push(spending);
        const result = await category.save();

        return result.spendings[index - 1]._id;
    }

    async editSpending(spending: ISpending) {
        try {
            return await this.budgetCategoryModel.findOneAndUpdate(
                { 'spendings._id': spending.id },
                {
                    'spendings.$.name': spending.name,
                    'spendings.$.price': spending.price,
                    'spendings.$.moneyAlreadyPayed': spending.moneyAlreadyPayed,
                    'spendings.$.notes': spending.notes,
                },
            );
        } catch (error) {
            console.log(error);
            throw new NotFoundException('Could not update a spending.');
        }
    }

    async editCategory(categoryId: string, newCategoryName: string) {
        return await this.budgetCategoryModel.findOneAndUpdate({ _id: categoryId }, { name: newCategoryName });
    }

    async deleteCategory(categoryId: string) {
        try {
            const result = await this.budgetCategoryModel.deleteOne({ _id: categoryId });
            if (result.deletedCount > 0) {
                return result;
            } else {
                throw new NotFoundException('Could not find a category.');
            }
        } catch (error) {
            throw new NotFoundException('Could not find a category.');
        }
    }

    async deleteSpending(categoryId: string, spendingId: string) {
        try {
            const result = await this.budgetCategoryModel.updateOne({ _id: categoryId }, { $pull: { spendings: { _id: spendingId } } }).exec();
            if (result.modifiedCount > 0) {
                return result;
            } else {
                throw new NotFoundException('Could not find a spending or category.');
            }
        } catch (error) {
            throw new NotFoundException('Could not find a spending or category.');
        }
    }

    private async _findCategory(categoryId: string): Promise<any> {
        let category;

        try {
            category = await this.budgetCategoryModel.findById(categoryId);
        } catch (error) {
            throw new NotFoundException('Could not find a budget category.');
        }

        return category;
    }
}
