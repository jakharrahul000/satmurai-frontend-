import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sharedInitialState as initialState } from 'store/states';

export const sharedSlice = createSlice({
    name: 'shared',
    initialState,
    reducers: {
        SetAlertType: (state, action: PayloadAction<{ value: string | null }>) => {
            state.alertType = action.payload.value;
        },
        SetAlertMsg: (state, action: PayloadAction<{ value: string | null }>) => {
            state.alertMsg = action.payload.value;
        },
    },
});

export const { SetAlertType, SetAlertMsg } = sharedSlice.actions;

export const SharedReducer = sharedSlice.reducer;
