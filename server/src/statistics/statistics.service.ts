import { Injectable } from '@nestjs/common';

import { IBudgetCategory } from 'src/budget/budget.model';
import { BudgetService } from 'src/budget/budget.service';
import { IBudgetCategoriesData } from './statistics.model';

@Injectable()
export class StatisticsService {
    constructor(private budget: BudgetService) {}

    async getBudgetCategoriesCost(): Promise<IBudgetCategoriesData> {
        const budgetInfo = await this.budget.getBudgetInfo();
        debugger;
        const chartData: IBudgetCategoriesData = {
            labels: budgetInfo.categories.map(category => category.name),
            prices: this._calculateMoney(budgetInfo.categories, 'price'),
            moneyAlreadyPaied: this._calculateMoney(budgetInfo.categories, 'moneyAlreadyPaied'),
        };

        return chartData;
    }

    private _calculateMoney(categories: IBudgetCategory[], moneyType: string): number[] {
        return categories.map(category => category.spendings.reduce((totalSum, spending) => totalSum + spending[moneyType], 0));
    }
}
