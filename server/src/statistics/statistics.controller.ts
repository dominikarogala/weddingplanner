import { Controller, Get } from '@nestjs/common';
import { IBudgetCategoriesData, IConfirmedGuests, IGuestsSex, ITaskCategoriesDoneData } from './statistics.model';
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

    @Get('guestsSex')
    async getGuestsSex(): Promise<IGuestsSex> {
        const result = await this._statistics.getGuestsSex();
        return result;
    }

    @Get('confirmedGuests')
    async getConfirmedGuests(): Promise<IConfirmedGuests> {
        const result = await this._statistics.getConfirmedGuests();
        return result;
    }
}
