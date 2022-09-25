import React from 'react';

interface IProps {
    className?: string;
    theme?: string;
    label: string;
}

export const Tag = ({ theme, className, label }: IProps): JSX.Element => {
    const background =
        theme && theme === 'white' ? ' bg-white text-gray-600 ' : ' bg-gray-300 text-gray-600 ';

    return (
        <div
            className={
                className +
                background +
                ' flex-none md:font-medium text-xs px-2 md:px-2.5 py-1 md:py-1.5 rounded-md '
            }
        >
            {label}
        </div>
    );
};
