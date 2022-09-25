import React from 'react';

export interface IFormikInput extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    showLabel?: boolean;
    label?: string;
    options?: IOptions[];
    labelClass?: string;
    info?: JSX.Element;
    inputNumber: number;
    background?: string;
    padding?: string;
    fontSize?: string;
    fieldType?: string;
    control?: string;
}

interface IOptions {
    key: JSX.Element;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any;
}
