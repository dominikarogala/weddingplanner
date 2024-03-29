import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserInfoService } from 'src/user-config/user-config.service';

import { BudgetCategory, IBudgetInfo, ISpending } from './budget.model';

@Injectable()
export class BudgetService {
    constructor(@Inject('BUDGET_MODEL') private readonly budgetCategoryModel: Model<BudgetCategory>, private _userInfo: UserInfoService) {}

    async getBudgetInfo(): Promise<IBudgetInfo> {
        const budgetCategories = await this.budgetCategoryModel.find().exec();
        const moneySpent = this._calculateBudgetSpent(budgetCategories);
        const budget = await (await this._userInfo.getUserConfig()).budget;

        const budgetInfo: IBudgetInfo = {
            budgetSpent: moneySpent,
            budgetLeft: budget - moneySpent,
            categories: budgetCategories.map(category => ({
                name: category.name,
                id: category._id,
                spendings: category.spendings.map(spending => ({
                    id: spending._id,
                    name: spending.name,
                    price: spending.price,
                    notes: spending.notes,
                    moneyAlreadyPaied: spending.moneyAlreadyPaied,
                })),
            })),
        };

        return budgetInfo;
    }

    private _calculateBudgetSpent(budgetCategories: BudgetCategory[]): number {
        let budgetSpent = 0;

        budgetCategories.forEach(category => {
            category.spendings.forEach(spending => (budgetSpent += spending.price));
        });

        return budgetSpent;
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
                    'spendings.$.moneyAlreadyPaied': spending.moneyAlreadyPaied,
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
