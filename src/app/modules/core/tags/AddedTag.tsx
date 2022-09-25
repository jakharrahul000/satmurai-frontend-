import React from 'react';
import { Icon } from '../icons';

interface IProps {
    className?: string;
    label: string;
    onRemove: () => void;
}

export const AddedTag = ({ className, label, onRemove }: IProps): JSX.Element => {
    return (
        <div
            className={
                className +
                '  bg-gray-200 text-gray-600 border border-gray-200  md:font-medium text-sm px-1.5 md:px-2 py-0.5 md:py-1 rounded-md flex items-center gap-x-0.5 md:gap-x-1'
            }
        >
            <div>{label}</div>
            <Icon
                onClick={onRemove}
                primaryColor="text-gray-700"
                icon="close"
                className="w-5  cursor-pointer"
            />
        </div>
    );
};
