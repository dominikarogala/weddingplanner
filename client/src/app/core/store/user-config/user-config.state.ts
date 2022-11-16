export interface IUserConfig {
    weddingDate: string;
    brideName: string;
    groomName: string;
    budget?: number;
}

export const initialUserConfigState = {
    weddingDate: '',
    brideName: '',
    groomName: '',
};
