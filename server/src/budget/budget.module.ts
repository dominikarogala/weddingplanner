import { Module } from '@nestjs/common';
import { BudgetController } from './budget.controller';
import { BudgetService } from './budget/budget.service';

@Module({
  controllers: [BudgetController],
  providers: [BudgetService]
})
export class BudgetModule {}
