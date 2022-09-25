import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { tokenInitialState as initialState } from 'store/states';

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        SetToken: (state, action: PayloadAction<{ token: string }>) => {
            state.token = action.payload.token;
        },
        LogoutForToken: (state) => {
            state.token = null;
        },
    },
});

export const { SetToken, LogoutForToken } = tokenSlice.actions;

export const TokenReducer = tokenSlice.reducer;
