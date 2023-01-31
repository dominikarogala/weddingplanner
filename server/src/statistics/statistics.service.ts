import { Injectable } from '@nestjs/common';

import { IBudgetCategory } from 'src/budget/budget.model';
import { BudgetService } from 'src/budget/budget.service';
import { Sex } from 'src/guests/guests.model';
import { GuestsService } from 'src/guests/guests.service';
import { TaskService } from 'src/task/task.service';
import { IBudgetCategoriesData, IConfirmedGuests, IGuestsSex, ITaskCategoriesDoneData } from './statistics.model';

@Injectable()
export class StatisticsService {
    constructor(private budget: BudgetService, private task: TaskService, private guest: GuestsService) {}

    async getBudgetCategoriesCost(): Promise<IBudgetCategoriesData> {
        const budgetInfo = await this.budget.getBudgetInfo();
        const chartData: IBudgetCategoriesData = {
            labels: budgetInfo.categories.map(category => category.name),
            prices: this._calculateMoney(budgetInfo.categories, 'price'),
            moneyAlreadyPaied: this._calculateMoney(budgetInfo.categories, 'moneyAlreadyPaied'),
        };

        return chartData;
    }

    async getTaskCategoriesDone(): Promise<ITaskCategoriesDoneData> {
        const tasks = await this.task.getAllTasks();
        const chartData: ITaskCategoriesDoneData = {
            labels: tasks.map(task => task.name),
            allTasks: tasks.map(category => category.tasks.length),
            tasksDone: tasks.map(category => category.tasks.reduce((totalSum, task) => totalSum + (task.isFinished ? 1 : 0), 0)),
        };

        return chartData;
    }

    async getGuestsSex(): Promise<IGuestsSex> {
        const groups = await this.guest.getGuests();
        const result = {
            men: 0,
            women: 0,
            unspecified: 0,
        };

        groups.forEach(group =>
            group.guests.forEach(guest => {
                if (guest.sex === Sex.male) {
                    result.men++;
                } else if (guest.sex === Sex.female) {
                    result.women++;
                } else {
                    result.unspecified++;
                }
            }),
        );

        return result;
    }

    async getConfirmedGuests(): Promise<IConfirmedGuests> {
        const groups = await this.guest.getGuests();
        const result: IConfirmedGuests = {
            confirmed: 0,
            notConfirmed: 0,
        };

        groups.forEach(group =>
            group.guests.forEach(guest => {
                if (guest.isConfirmed) {
                    result.confirmed++;
                } else {
                    result.notConfirmed++;
                }
            }),
        );

        return result;
    }

    private _calculateMoney(categories: IBudgetCategory[], moneyType: string): number[] {
        return categories.map(category => category.spendings.reduce((totalSum, spending) => totalSum + spending[moneyType], 0));
    }
}
