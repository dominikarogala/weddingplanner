export interface ITask {
    name: string;
    endDate: string;
    isFinished: boolean;
    notes: string;
}

export interface ICategory {
    name: string;
    tasks: ITask[];
}
