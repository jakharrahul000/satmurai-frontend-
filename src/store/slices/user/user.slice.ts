import { IUser } from '@interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userInitialState as initialState } from 'store/states';

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SetUser: (state, action: PayloadAction<{ user: IUser }>) => {
            state.user = action.payload.user;
        },
        LogoutForUser: (state) => {
            state.user = null;
        },
    },
});

export const { SetUser, LogoutForUser } = userSlice.actions;

export const UserReducer = userSlice.reducer;
