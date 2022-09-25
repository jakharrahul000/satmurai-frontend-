import { IUser } from '@interfaces';

export interface IUserState {
    user: IUser | null;
}

export const userInitialState: IUserState = {
    user: null,
};
