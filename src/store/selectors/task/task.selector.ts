import { ITask } from '../../../app/interfaces';
import { ITaskState } from 'store/states';
import { RootState } from 'store/store';

const getTaskState = (state: RootState): ITaskState => state.task;

export const getTask = (state: RootState): ITask | null => getTaskState(state).task;
