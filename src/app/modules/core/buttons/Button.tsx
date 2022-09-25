import React from 'react';
import { IButtonProps } from '@interfaces';

export const Button = ({
    background,
    text,
    border,
    borderShow,
    borderLarge,
    color,
    large,
    stroked,
    raised,
    borderStyle,
    padding,
    paddingX,
    paddingY,
    fontSize,
    className,
    children,
    ...rest
}: IButtonProps): JSX.Element => {
    const showBorder = borderShow != undefined ? borderShow : true;
    const disabled = rest.disabled ? rest.disabled : false;

    const baseClass =
        (className ? className : ' ') +
        (disabled ? ' cursor-not-allowed ' : ' cursor-pointer ') +
        ' whitespace-nowrap active:opacity-60 ring-white ring-opacity-5 focus:outline-none ';

    const backgroundColor =
        (background
            ? background
            : stroked
            ? 'bg-white'
            : disabled
            ? 'bg-gray-500'
            : color
            ? color === 'primary'
                ? 'bg-blue-500 nhover:hover:bg-blue-600'
                : color === 'secondary'
                ? 'bg-gray-200'
                : color === 'warn'
                ? 'bg-red-900'
                : 'bg-white'
            : 'bg-white') + ' ';

    const textColor =
        (text
            ? text
            : stroked
            ? disabled
                ? 'text-gray-500'
                : color
                ? color === 'primary'
                    ? 'text-blue-500'
                    : color === 'secondary'
                    ? 'text-gray-600'
                    : color === 'warn'
                    ? 'text-red-900'
                    : 'text-black'
                : 'text-black'
            : disabled
            ? 'text-white'
            : color
            ? color === 'primary'
                ? 'text-white'
                : color === 'secondary'
                ? 'text-gray-600'
                : color === 'warn'
                ? 'text-white'
                : 'text-gray-800'
            : 'text-gray-800') + ' ';

    const borderColor =
        (stroked
            ? showBorder
                ? border
                    ? border
                    : disabled
                    ? 'border border-gray-500'
                    : color
                    ? color === 'primary'
                        ? 'border border-blue-500'
                        : color === 'secondary'
                        ? 'border border-gray-400'
                        : color === 'warn'
                        ? 'border border-red-900'
                        : 'border border-black'
                    : 'border border-black'
                : ' '
            : ' ') + ' ';

    const borderStyleClass =
        borderStyle === 'dashed'
            ? ' border-dashed '
            : borderStyle === 'dotted'
            ? ' border-dotted '
            : borderStyle === 'double'
            ? ' border-double '
            : ' border-solid ';

    const boxShadow = raised ? 'shadow-sm ' : 'shadow-none ';
    const borderRadius = borderLarge ? 'rounded-lg ' : 'rounded-md ';
    const fontSizeClass =
        fontSize === 'extraSmall'
            ? 'text-xs'
            : fontSize === 'small'
            ? ' text-xs md:text-sm '
            : fontSize === 'medium'
            ? ' text-sm '
            : ' text-base ';

    const paddingy = large ? ' py-1.5 md:py-2 ' : ' py-1 md:py-1.5 ';
    const paddingx = ' px-3 md:px-5 ';
    const paddingClass =
        ' ' +
        (padding
            ? padding
            : (paddingY ? paddingY : paddingy) + ' ' + (paddingX ? paddingX : paddingx)) +
        ' ';

    const finalClass =
        baseClass +
        backgroundColor +
        textColor +
        borderColor +
        fontSizeClass +
        borderStyleClass +
        paddingClass +
        boxShadow +
        borderRadius;

    return (
        <button {...rest} className={finalClass}>
            {children}
        </button>
    );
};
