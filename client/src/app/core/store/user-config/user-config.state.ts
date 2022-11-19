export interface IUserConfig {
    isInitialConfigDone: boolean;
    weddingDate: string;
    brideName: string;
    groomName: string;
    budget?: number;
}

export const initialUserConfigState: IUserConfig = {
    isInitialConfigDone: true,
    weddingDate: '',
    brideName: '',
    groomName: '',
};
