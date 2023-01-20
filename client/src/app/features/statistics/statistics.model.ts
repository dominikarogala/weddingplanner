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
