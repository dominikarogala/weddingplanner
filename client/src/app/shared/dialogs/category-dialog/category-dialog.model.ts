export const enum DialogMode {
    Creation,
    Edition,
}

export interface IDialogMode {
    mode: DialogMode;
}

export interface ICategoryDialogData extends IDialogMode {
    categoryName: string;
}
