import React from 'react';

interface IProps {
    children: React.ReactNode;
}

export const FormikInputInfo = ({ children }: IProps): JSX.Element => {
    return <div className="pt-1 pl-1 text-gray-700 text-xs">{children}</div>;
};
