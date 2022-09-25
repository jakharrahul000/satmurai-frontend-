export interface ISharedState {
    alertType: string | null; // store alert typ [ERROR, INFO, WARNING, SUCCESS]
    alertMsg: string | null; // store error message
}

export const sharedInitialState: ISharedState = {
    alertType: null,
    alertMsg: null,
};
