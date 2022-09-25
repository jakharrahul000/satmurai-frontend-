import React from 'react';
import { AppInit } from 'app/AppInit';
import { AllRoutes } from './routes';
import { AlertContainer } from './modules/core';
import { useAppDispatch } from '../store/store';

export const App = (): JSX.Element => {
    const dispatch = useAppDispatch();

    return (
        <AppInit>
            <AlertContainer />
            <AllRoutes />
        </AppInit>
    );
};
