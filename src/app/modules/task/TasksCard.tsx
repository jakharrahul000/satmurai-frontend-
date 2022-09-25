import { ITask } from '../../interfaces';
import React from 'react';
import { IndividualTask } from './IndividualTask';

interface IProps {
    heading: string;
    tasks: ITask[];
}

export const TasksCard = ({ heading, tasks }: IProps) => {
    return (
        <div className="bg-white rounded-md w-full">
            <div className="p-3 md:p-4 text-gray-800 text-base md:text-xl font-medium md:font-semibold">
                {heading}
            </div>
            <hr className="border-gray-300" />
            {tasks.map((task, index) => {
                return (
                    <div key={index}>
                        <IndividualTask task={task} />
                        {index !== tasks.length - 1 && <hr className="w-full border-gray-300" />}
                    </div>
                );
            })}
        </div>
    );
};
