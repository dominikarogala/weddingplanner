import { Controller, Get } from '@nestjs/common';
import { IBudgetCategoriesData, ITaskCategoriesDoneData } from './statistics.model';
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {
    constructor(private _statistics: StatisticsService) {}

    @Get('budgetCategoriesCost')
    async getBudgetCategoriesCost(): Promise<IBudgetCategoriesData> {
        const result = await this._statistics.getBudgetCategoriesCost();
        return result;
    }

    @Get('taskCategoriesDone')
    async getTaskCategoriesDone(): Promise<ITaskCategoriesDoneData> {
        const result = await this._statistics.getTaskCategoriesDone();
        return result;
    }
}
