import { createSlice, PayloadAction, Update } from '@reduxjs/toolkit';
import { IUser } from '@interfaces';
import { usersListInitialState as initialState, UsersListAdapter } from 'store/states';

export const usersListSlice = createSlice({
    name: 'usersList',
    initialState,
    reducers: {
        LoadUsersListSuccess: (state, action: PayloadAction<{ users: IUser[] }>) => {
            UsersListAdapter.setAll(state, action.payload.users);
        },
        UpdateUsersListSuccess: (state, action: PayloadAction<{ user: Update<IUser> }>) => {
            const oldUsers = state.entities;

            if (oldUsers[action.payload.user.id])
                UsersListAdapter.updateOne(state, action.payload.user);
        },
    },
});

export const { LoadUsersListSuccess, UpdateUsersListSuccess } = usersListSlice.actions;

export const UsersListReducer = usersListSlice.reducer;
