import { ITask } from '@interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { taskInitialState as initialState } from 'store/states';

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        SetTask: (state, action: PayloadAction<{ task: ITask }>) => {
            state.task = action.payload.task;
        },
    },
});

export const { SetTask } = taskSlice.actions;

export const TaskReducer = taskSlice.reducer;
