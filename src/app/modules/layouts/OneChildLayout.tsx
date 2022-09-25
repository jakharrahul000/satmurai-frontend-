import React from 'react';

interface IProps {
    children: React.ReactNode;
}

export const OneChildLayout = ({ children }: IProps): JSX.Element => {
    return (
        <React.Fragment>
            <div className="pt-12 md:pt-14 pb-4 px-4 md:px-10 lg:px-16 xl:pl-80 xl:pr-8 2xl:px-80 flex flex-col items-center">
                <div className="container mx-auto xl:max-w-3xl min-w-72 flex flex-col">
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
};
