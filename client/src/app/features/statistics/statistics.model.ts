interface IChartData {
    labels: string[];
}

export interface IBudgetCategoriesCostData extends IChartData {
    prices: number[];
    moneyAlreadyPaied: number[];
}

export interface ITaskCategoriesDoneData extends IChartData {
    allTasks: number[];
    tasksDone: number[];
}

export interface IGuestsSexData extends IChartData {
    men: number;
    women: number;
    unspecified: number;
}

export interface IConfirmedGuests extends IChartData {
    confirmed: number;
    notConfirmed: number;
}
