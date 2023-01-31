interface IChartData {
    labels: string[];
}

export interface IBudgetCategoriesData extends IChartData {
    prices: number[];
    moneyAlreadyPaied: number[];
}

export interface ITaskCategoriesDoneData extends IChartData {
    allTasks: number[];
    tasksDone: number[];
}

export interface IGuestsSex {
    men: number;
    women: number;
    unspecified: number;
}

export interface IConfirmedGuests {
    confirmed: number;
    notConfirmed: number;
}
