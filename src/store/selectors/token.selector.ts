import { ITokenState } from 'store/states';
import { RootState } from 'store/store';

const getTokenState = (state: RootState): ITokenState => state.token;

export const getToken = (state: RootState): string | null => getTokenState(state).token;
