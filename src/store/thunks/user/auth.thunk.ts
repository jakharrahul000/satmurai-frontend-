import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { handleError, setJWTTokenInLocalStorage } from 'app/utils';
import { ILoginThunk, IRegisterThunk } from 'store/interfaces';
import { SetUser, SetAuthLoading, SetToken } from '../../slices';
import { getAxiosInstance } from 'setup';
import { apiUrl } from 'app/utils/processenv';
import { IUserResponse } from '../../../app/interfaces';

/**
 * Login
 */
export const LoginStart = createAsyncThunk(
    'user/LoginStart',
    async ({ payload, navigate }: ILoginThunk, { dispatch }) => {
        try {
            // Set auth loading to true
            dispatch(SetAuthLoading({ value: true }));

            const AxiosInstance = getAxiosInstance(apiUrl);

            const response = await AxiosInstance({
                url: 'auth/login',
                method: 'post',
                data: payload,
            });
            const data: IUserResponse = response.data;

            if (data.data.token) {
                dispatch(SetUser({ user: data.data }));
                dispatch(SetToken({ token: data.data.token }));
                setJWTTokenInLocalStorage(data.data.token);
            }
            dispatch(SetAuthLoading({ value: false }));

            navigate('/');
        } catch (error) {
            handleError(error as AxiosError, dispatch, navigate);
            dispatch(SetAuthLoading({ value: false }));
        }
    },
);

/**
 * Register
 */
export const RegisterStart = createAsyncThunk(
    'user/RegisterStart',
    async ({ payload, navigate }: IRegisterThunk, { dispatch }) => {
        try {
            // Set auth loading to true
            dispatch(SetAuthLoading({ value: true }));

            const AxiosInstance = getAxiosInstance(apiUrl);

            const response = await AxiosInstance({
                url: 'auth/register',
                method: 'post',
                data: payload,
            });
            const data: IUserResponse = response.data;

            if (data.data.token) {
                dispatch(SetUser({ user: data.data }));
                dispatch(SetToken({ token: data.data.token }));
                setJWTTokenInLocalStorage(data.data.token);
            }
            dispatch(SetAuthLoading({ value: false }));

            navigate('/');
        } catch (error) {
            handleError(error as AxiosError, dispatch, navigate);
            dispatch(SetAuthLoading({ value: false }));
        }
    },
);
