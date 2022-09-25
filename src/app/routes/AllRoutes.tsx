import React from 'react';
import { PublicRoutes, PrivateRoutes } from 'app/routes';
import { useSelector } from 'react-redux';
import { getToken } from 'store/selectors';

export const AllRoutes = (): JSX.Element => {
    const jwtToken = useSelector(getToken);

    return (
        <React.Fragment>
            {/* Common Routes (will be always visible) */}

            {/* Public Routes (will be visible only when user if logged out) */}
            {!jwtToken && <PublicRoutes />}

            {/* Private Routes (will be visible only when user is logged in) */}
            {jwtToken && <PrivateRoutes />}
        </React.Fragment>
    );
};
