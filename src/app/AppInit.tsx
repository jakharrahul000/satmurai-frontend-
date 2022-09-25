import React, { useState } from 'react';
import { useEffect } from 'react';
import { SetToken } from 'store/slices';
import { useAppDispatch } from 'store/store';
import {
    decodeJWTToken,
    getJWTTokenFromLocalStorage,
    removeJWTTokenInLocalStorage,
} from 'app/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkIfJWTTokenIsExpired } from '../app/utils';
import { GetUser, GetUsers } from 'store/thunks/user/user.thunk';
import { getTasksListLoading, getUserLoading, getUsersListLoading } from 'store/selectors';

interface IProps {
    children: React.ReactNode;
}

export const AppInit = ({ children }: IProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [appLoading, setAppLoading] = useState(true);
    const userLoading = useSelector(getUserLoading);
    const usersListLoading = useSelector(getUsersListLoading);

    // Get token from local storage
    const token = getJWTTokenFromLocalStorage();
    const [isTokenExpired, setIsTokenExpired] = useState(true);

    useEffect(() => {
        if (token) {
            // Checks if token is expired or not
            if (!checkIfJWTTokenIsExpired(token)) {
                const decodedToken = decodeJWTToken(token);

                dispatch(SetToken({ token }));

                // Get organization details
                dispatch(GetUsers({ navigate }));
                dispatch(GetUser({ id: decodedToken._id, navigate }));
            } else {
                removeJWTTokenInLocalStorage();
            }
        }

        setAppLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <div className="min-w-90">{!appLoading && children}</div>;
};
