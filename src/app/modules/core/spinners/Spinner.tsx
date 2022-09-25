import React from 'react';

interface IProps {
    dimensions?: string;
    className?: string;
}

export const Spinner = ({ dimensions = 'w-4 h-4', className }: IProps): JSX.Element => {
    return (
        <div
            style={{ borderTopColor: '#6c6c6c' }}
            className={
                className +
                ' ' +
                dimensions +
                ' border-2 border-gray-200 border-solid rounded-full animate-spin'
            }
        ></div>
    );
};
