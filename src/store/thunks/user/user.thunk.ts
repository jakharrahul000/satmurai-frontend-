import { createAsyncThunk, Update } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { handleError } from 'app/utils';
import { IGetUsersThunk, IGetUserThunk, IChangeUserRoleThunk } from 'store/interfaces';
import {
    LoadUsersListSuccess,
    SetUpdateUserToAdminIdLoading,
    SetUser,
    SetuserLoading,
    SetUsersListLoading,
    UpdateUsersListSuccess,
} from 'store/slices';
import { getAxiosInstance } from 'setup';
import { apiUrl } from 'app/utils/processenv';
import { IGetUsersResponse, IUser, IUserResponse } from '../../../app/interfaces';
import { Roles } from 'app/utils/enums/role.enum';

/**
 * get all user
 */
export const GetUser = createAsyncThunk(
    'user/GetUser',
    async ({ id, navigate }: IGetUserThunk, { dispatch }) => {
        try {
            // Set user loading to true
            dispatch(SetuserLoading({ value: true }));

            const AxiosInstance = getAxiosInstance(apiUrl);

            const response = await AxiosInstance({
                url: `user/${id}`,
                method: 'get',
            });
            const data: IUserResponse = response.data;

            dispatch(SetUser({ user: data.data }));
            dispatch(SetuserLoading({ value: false }));
        } catch (error) {
            handleError(error as AxiosError, dispatch, navigate);
            dispatch(SetuserLoading({ value: false }));
        }
    },
);

/**
 * get all users
 */
export const GetUsers = createAsyncThunk(
    'user/GetUsers',
    async ({ navigate }: IGetUsersThunk, { dispatch }) => {
        try {
            // Set users list loading to true
            dispatch(SetUsersListLoading({ value: true }));

            const AxiosInstance = getAxiosInstance(apiUrl);

            const response = await AxiosInstance({
                url: 'user/all',
                method: 'get',
            });
            const data: IGetUsersResponse = response.data;

            dispatch(LoadUsersListSuccess({ users: data.data }));
            dispatch(SetUsersListLoading({ value: false }));
        } catch (error) {
            handleError(error as AxiosError, dispatch, navigate);
            dispatch(SetUsersListLoading({ value: false }));
        }
    },
);

/**
 * Update user to admin
 */
export const ChangeUserRole = createAsyncThunk(
    'user/ChangeUserRole',
    async ({ id, payload, oldUser, navigate }: IChangeUserRoleThunk, { dispatch }) => {
        try {
            // Set update loading to true
            dispatch(SetUpdateUserToAdminIdLoading({ value: id }));

            const AxiosInstance = getAxiosInstance(apiUrl);

            await AxiosInstance({
                url: `user/${id}/changeUserRole`,
                method: 'patch',
                data: payload,
            });

            const updatedUser: Update<IUser> = {
                id,
                changes: {
                    role:
                        oldUser.role === Roles.ADMINISTRATOR
                            ? Roles.COLLABORATOR
                            : Roles.ADMINISTRATOR,
                },
            };

            dispatch(UpdateUsersListSuccess({ user: updatedUser }));
            dispatch(SetUpdateUserToAdminIdLoading({ value: '' }));
        } catch (error) {
            handleError(error as AxiosError, dispatch, navigate);
            dispatch(SetUpdateUserToAdminIdLoading({ value: '' }));
        }
    },
);
