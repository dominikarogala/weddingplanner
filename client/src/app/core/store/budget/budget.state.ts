import { IBudgetCategory } from 'src/app/shared/models';

export interface IBudgetState {
    budgetSpent: number;
    budgetLeft: number;
    categories: IBudgetCategory[];
}

export const initialBudgetState: IBudgetState = {
    budgetLeft: 0,
    budgetSpent: 0,
    categories: [],
};
