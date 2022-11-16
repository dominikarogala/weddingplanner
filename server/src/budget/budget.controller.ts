import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BudgetService } from './budget.service';

@UseGuards(JwtAuthGuard)
@Controller('budget')
export class BudgetController {
    constructor(private _budget: BudgetService) {}

    @Post()
    async addNewBudget(@Body('amount') amount: number) {
        return await this._budget.addNewBudget(amount);
    }
}
