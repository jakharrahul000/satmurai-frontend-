import { createSlice, PayloadAction, Update } from '@reduxjs/toolkit';
import { ITask } from '@interfaces';
import { tasksListInitialState as initialState, TasksListAdapter } from 'store/states';

export const tasksListSlice = createSlice({
    name: 'tasksList',
    initialState,
    reducers: {
        LoadTasksListSuccess: (state, action: PayloadAction<{ tasks: ITask[] }>) => {
            TasksListAdapter.setAll(state, action.payload.tasks);
        },
        AddTasksListSuccess: (state, action: PayloadAction<{ task: ITask }>) => {
            TasksListAdapter.addOne(state, action.payload.task);
        },
        UpdateTasksListSuccess: (state, action: PayloadAction<{ task: Update<ITask> }>) => {
            const oldTasks = state.entities;

            if (oldTasks[action.payload.task.id])
                TasksListAdapter.updateOne(state, action.payload.task);
        },
        DeleteTasksListSuccess: (state, action: PayloadAction<{ id: string }>) => {
            TasksListAdapter.removeOne(state, action.payload.id);
        },
    },
});

export const {
    LoadTasksListSuccess,
    UpdateTasksListSuccess,
    DeleteTasksListSuccess,
    AddTasksListSuccess,
} = tasksListSlice.actions;

export const TasksListReducer = tasksListSlice.reducer;
