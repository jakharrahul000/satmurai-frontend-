import { ITask } from '@interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@reduxjs/toolkit';

export interface ITasksListState extends EntityState<ITask> {}
export const TasksListAdapter: EntityAdapter<ITask> = createEntityAdapter<ITask>({
    selectId: (task: ITask) => task._id,
});

export const tasksListInitialState: ITasksListState = TasksListAdapter.getInitialState({});
