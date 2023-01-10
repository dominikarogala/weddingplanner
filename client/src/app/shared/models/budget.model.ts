import { ICategory, ICategoryElement } from './category.model';

export interface IBudgetCategory extends ICategory {
    spendings: ISpending[];
}

export interface ISpending extends ICategoryElement {
    price: number;
    moneyAlreadyPayed: number;
}

export interface ISpendingDTO {
    categoryId: string;
    spending: ISpending;
}
