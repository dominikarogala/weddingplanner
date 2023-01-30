export interface ICategory {
    name: string;
    isOpened?: boolean;
    id?: string;
}

export interface ICategoryElement extends ICategory {
    notes?: string;
}
