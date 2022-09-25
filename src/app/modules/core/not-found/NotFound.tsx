import React from 'react';

export const NotFound = (): JSX.Element => {
    return (
        <div className="flex flex-col items-center pt-10 gap-y-2">
            <div className="text-7xl md:text-9xl text-gray-800">404</div>
            <div className="text-3xl md:text-5xl text-gray-800">Page not found</div>
        </div>
    );
};
