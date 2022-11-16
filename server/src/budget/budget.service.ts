import { Injectable } from '@nestjs/common';

@Injectable()
export class BudgetService {
    async addNewBudget(amount: number) {
        throw new Error('Method not implemented.');
    }
}
