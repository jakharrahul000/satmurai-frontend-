import { ITask } from '@interfaces';

export interface ITaskState {
    task: ITask | null;
}

export const taskInitialState: ITaskState = {
    task: null,
};
