import { ISharedState } from 'store/states';
import { RootState } from 'store/store';

const getSharedState = (state: RootState): ISharedState => state.shared;

export const getAlertType = (state: RootState): string | null => getSharedState(state).alertType;
export const getAlertMsg = (state: RootState): string | null => getSharedState(state).alertMsg;
