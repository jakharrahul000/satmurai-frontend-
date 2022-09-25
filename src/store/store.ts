import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
    LoadingReducer,
    SharedReducer,
    TaskReducer,
    TasksListReducer,
    TokenReducer,
    UserReducer,
    UsersListReducer,
} from './slices';

export const store = configureStore({
    reducer: {
        // User
        user: UserReducer,
        usersList: UsersListReducer,

        // Task
        task: TaskReducer,
        tasksList: TasksListReducer,

        // Extras
        loading: LoadingReducer,
        token: TokenReducer,
        shared: SharedReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch`
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
