import { ITasksListState, TasksListAdapter } from 'store/states';
import { RootState } from 'store/store';

const getTasksListState = (state: RootState): ITasksListState => state.tasksList;

export const tasksListSelector = TasksListAdapter.getSelectors<RootState>(
    (state) => state.tasksList,
);

export const getTasksList = tasksListSelector.selectAll;
