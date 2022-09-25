import React from 'react';
import { ILogin, IRegister } from '../../../app/interfaces';
import { NavigateFunction } from 'react-router-dom';

export interface ILoginThunk {
    payload: ILogin;
    navigate: NavigateFunction;
}

export interface IRegisterThunk {
    payload: IRegister;
    navigate: NavigateFunction;
}
