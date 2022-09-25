import React from 'react';

interface IProps {
    showLabel?: boolean;
    name: string;
    label?: string;
    labelClass?: string;
    inputNumber: number;
    required?: boolean;
}

export const FormikLabel = ({
    showLabel,
    name,
    label,
    labelClass,
    inputNumber,
    required,
}: IProps): JSX.Element => {
    const defaultShowLabel = showLabel != undefined ? showLabel : true;
    const margin = inputNumber === 1 ? ' ' : 'mt-3 md:mt-5 ';

    return (
        <label
            className={
                margin +
                ' font-medium text-sm mb-1 md:mb-1 ' +
                (defaultShowLabel ? 'block ' : 'hidden ') +
                labelClass
            }
            htmlFor={name}
        >
            {label ? label : ''}
            {required && <span className="text-red-500"> *</span>}
        </label>
    );
};
