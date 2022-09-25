import { ITask } from '../../interfaces';
import React from 'react';
import { Button } from '../../modules/core';
import { useNavigate } from 'react-router-dom';

interface IProps {
    task: ITask;
}

const priorities = ['Low', 'Normal', 'High', 'Urgent'];

export const IndividualTask = ({ task }: IProps) => {
    const navigate = useNavigate();

    const getCSSForPriority = (priority: number) => {
        if (priority === 1) {
            return 'bg-green-500';
        }
        if (priority === 2) {
            return 'bg-yellow-700';
        }
        if (priority === 3) {
            return 'bg-orange-500';
        }
        if (priority === 4) {
            return 'bg-red-700';
        }
    };

    const goToTask = () => {
        navigate(`/task/${task._id}`);
    };

    return (
        <div className="px-3 py-2 md:px-4 md:py-3 flex items-center justify-between gap-x-3">
            <div className="text-gray-800 text-sm">{task.title}</div>
            <div className="flex items-center gap-x-2">
                <div
                    className={
                        'whitespace-nowrap text-base text-white py-1.5 md:py-2 px-3 md:px-5 rounded-md ' +
                        getCSSForPriority(task.priority)
                    }
                >
                    {priorities[task.priority - 1]}
                </div>
                <Button
                    onClick={goToTask}
                    color="secondary"
                    large
                    className="flex justify-center  items-center"
                >
                    View
                </Button>
            </div>
        </div>
    );
};
