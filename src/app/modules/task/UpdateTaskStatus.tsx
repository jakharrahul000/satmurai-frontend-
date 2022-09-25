import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Button, Spinner, FormikLabel } from '../../modules/core';
import { TaskStatus } from 'app/utils';
import { IChangeTaskStatus, ITask } from '../../interfaces';
import { useAppDispatch } from 'store/store';
import { ChangeTaskStatus } from 'store/thunks';
import { getChangeTaskStatusLoading, getUser } from 'store/selectors';
import Select from 'react-select';
import { useEffect } from 'react';

const statusOptions = [
    { value: TaskStatus.TODO, label: 'ToDo' },
    { value: TaskStatus.PROGRESS, label: 'Progress' },
    { value: TaskStatus.REVIEW, label: 'Review' },
    { value: TaskStatus.DONE, label: 'Done' },
];

interface IProps {
    task: ITask;
}

export const UpdateTaskStatus = ({ task }: IProps) => {
    const user = useSelector(getUser);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [status, setStatus] = useState({ value: TaskStatus.TODO, label: 'ToDo' });
    const changeTaskStatusLoading = useSelector(getChangeTaskStatusLoading);

    const validationSchema = yup.object({
        title: yup
            .string()
            .required('Field is required')
            .max(240, 'Maximum characters length can be 30')
            .min(5, 'Minimum characters length should be 5'),
    });

    const handleStatusChange = (value: any) => {
        setStatus(value);
    };

    useEffect(() => {
        if (task.status === TaskStatus.TODO) setStatus(statusOptions[0]);
        if (task.status === TaskStatus.PROGRESS) setStatus(statusOptions[1]);
        if (task.status === TaskStatus.REVIEW) setStatus(statusOptions[2]);
        if (task.status === TaskStatus.DONE) setStatus(statusOptions[3]);
    }, [task]);

    const onSubmit = () => {
        const taskData: IChangeTaskStatus = {
            status: status.value,
        };

        dispatch(ChangeTaskStatus({ id: task._id, oldTask: task, payload: taskData, navigate }));
    };

    return (
        <div className="bg-white rounded-md w-full">
            <div className="p-3 md:p-4 text-gray-800 text-base md:text-xl font-medium md:font-semibold">
                Status Info
            </div>
            <hr className="border-gray-300" />
            <div className="p-3 md:p-4">
                <div className="mt-3 md:mt-5">
                    <FormikLabel
                        showLabel
                        name="status"
                        label="Status"
                        labelClass="text-gray-700"
                        inputNumber={4}
                    />
                    <Select
                        options={statusOptions}
                        value={status}
                        onChange={(value) => handleStatusChange(value)}
                    />
                </div>
                <Button
                    disabled={changeTaskStatusLoading}
                    onClick={onSubmit}
                    color="primary"
                    large
                    className="w-full mt-5 md:mt-6 flex justify-center  items-center"
                >
                    {changeTaskStatusLoading ? (
                        <div className="flex items-center gap-x-2.5">
                            <Spinner />
                            <span>Updating</span>
                        </div>
                    ) : (
                        <div>Update</div>
                    )}
                </Button>
            </div>
        </div>
    );
};
