import { Body, Controller, Delete, Get, HttpCode, Post, Put, Query, UseGuards } from '@nestjs/common';

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

    @Put('spending')
    @HttpCode(204)
    async editSpending(@Body('spending') spending: ISpending) {
        await this._budget.editSpending(spending);
        return;
    }

    @Put('category')
    @HttpCode(204)
    async editCategory(@Body('categoryId') categoryId: string, @Body('newCategoryName') newCategoryName: string) {
        await this._budget.editCategory(categoryId, newCategoryName);
        return;
    }

    @Delete('category')
    @HttpCode(204)
    async deleteCategory(@Query('categoryId') categoryId: string) {
        await this._budget.deleteCategory(categoryId);
        return;
    }

    @Delete('spending')
    @HttpCode(204)
    async deleteSpending(@Query('categoryId') categoryId: string, @Query('spendingId') spendingId: string) {
        await this._budget.deleteSpending(categoryId, spendingId);
        return;
    }
}
