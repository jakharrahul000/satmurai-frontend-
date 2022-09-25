import { IChangeUserRole, IUser } from '@interfaces';
import React from 'react';
import { NavigateFunction } from 'react-router-dom';

export interface IGetUserThunk {
    id: string;
    navigate: NavigateFunction;
}

export interface IGetUsersThunk {
    navigate: NavigateFunction;
}

export interface IChangeUserRoleThunk {
    id: string;
    oldUser: IUser;
    payload: IChangeUserRole;
    navigate: NavigateFunction;
}
