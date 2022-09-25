import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadingInitialState as initialState } from 'store/states';

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        SetCreateLoading: (state, action: PayloadAction<{ value: boolean }>) => {
            state.create = action.payload.value;
        },
        SetUpdateLoading: (state, action: PayloadAction<{ value: boolean }>) => {
            state.update = action.payload.value;
        },
        SetAuthLoading: (state, action: PayloadAction<{ value: boolean }>) => {
            state.auth = action.payload.value;
        },
        SetUsersListLoading: (state, action: PayloadAction<{ value: boolean }>) => {
            state.usersList = action.payload.value;
        },
        SetTasksListLoading: (state, action: PayloadAction<{ value: boolean }>) => {
            state.tasksList = action.payload.value;
        },
        SetuserLoading: (state, action: PayloadAction<{ value: boolean }>) => {
            state.user = action.payload.value;
        },
        SetTaskLoading: (state, action: PayloadAction<{ value: boolean }>) => {
            state.task = action.payload.value;
        },
        SetChangeTaskStatusLoading: (state, action: PayloadAction<{ value: boolean }>) => {
            state.changeTaskStatus = action.payload.value;
        },
        SetUpdateTaskAssigneesLoading: (state, action: PayloadAction<{ value: boolean }>) => {
            state.updateTaskAssignees = action.payload.value;
        },
        SetUpdateTaskLoading: (state, action: PayloadAction<{ value: boolean }>) => {
            state.updateTask = action.payload.value;
        },
        SetUpdateUserToAdminIdLoading: (state, action: PayloadAction<{ value: string }>) => {
            state.updateUserToAdminId = action.payload.value;
        },
    },
});

export const {
    SetCreateLoading,
    SetUpdateLoading,
    SetAuthLoading,
    SetUsersListLoading,
    SetTasksListLoading,
    SetuserLoading,
    SetTaskLoading,
    SetChangeTaskStatusLoading,
    SetUpdateTaskAssigneesLoading,
    SetUpdateTaskLoading,
    SetUpdateUserToAdminIdLoading,
} = loadingSlice.actions;

export const LoadingReducer = loadingSlice.reducer;
