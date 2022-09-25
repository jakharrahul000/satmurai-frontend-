import React from 'react';

interface IProps {
    children: React.ReactNode;
}

export const FormikError = ({ children }: IProps): JSX.Element => {
    return <div className="pt-1 pl-1 text-red-900 text-xs flex gap-x-2">* {children}</div>;
};
