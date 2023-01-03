import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ISpending } from './budget.model';
import { BudgetService } from './budget.service';

@UseGuards(JwtAuthGuard)
@Controller('budget')
export class BudgetController {
    constructor(private _budget: BudgetService) {}

    @Get()
    async getBudgetInfo() {
        return await this._budget.getBudgetInfo();
    }

    @Post('category')
    async addNewCategory(@Body('categoryName') categoryName: string) {
        return await this._budget.addNewCategory(categoryName);
    }

    @Post('spending')
    async addNewSpending(@Body('categoryId') categoryId: string, @Body('spending') spending: ISpending) {
        return await this._budget.addNewSpending(categoryId, spending);
    }
}
