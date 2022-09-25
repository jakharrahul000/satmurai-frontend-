import React from 'react';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    background?: string;
    text?: string;
    border?: string;
    borderShow?: boolean;
    borderLarge?: boolean;
    large?: boolean;
    stroked?: boolean;
    raised?: boolean;
    borderStyle?: string;
    padding?: string;
    paddingX?: string;
    paddingY?: string;
    fontSize?: string;
}
