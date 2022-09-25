import { IUser } from '../../../app/interfaces';
import { IUserState } from 'store/states';
import { RootState } from 'store/store';

const getUserState = (state: RootState): IUserState => state.user;

export const getUser = (state: RootState): IUser | null => getUserState(state).user;
