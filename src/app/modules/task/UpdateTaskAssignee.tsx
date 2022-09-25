import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Button, Spinner, FormikLabel } from '../../modules/core';
import { filterUsersById, Roles, TaskStatus } from 'app/utils';
import { IChangeTaskStatus, ITask, IUpdateTaskAssignees } from '../../interfaces';
import { useAppDispatch } from 'store/store';
import { ChangeTaskStatus, UpdateTaskAssignees } from 'store/thunks';
import {
    getChangeTaskStatusLoading,
    getUpdateTaskAssigneesLoading,
    getUser,
    getUsersList,
} from 'store/selectors';
import Select from 'react-select';
import { useEffect } from 'react';

interface IProps {
    task: ITask;
}

export const UpdateTaskAssignee = ({ task }: IProps) => {
    const user = useSelector(getUser);
    const users = useSelector(getUsersList);
    const [usersOption, setUsersOption] = useState<any[]>([]);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [assignees, setAssignees] = useState<any>();
    const updateTaskAssigneesLoading = useSelector(getUpdateTaskAssigneesLoading);

    const handleAssigneesChange = (value: any) => {
        setAssignees(value);
    };

    const onSubmit = () => {
        const taskAssignees: any[] = [];
        if (assignees) {
            assignees.forEach((assignee: any) => {
                taskAssignees.push(assignee.value);
            });
        }

        const taskData: IUpdateTaskAssignees = {
            assignees: taskAssignees,
        };

        dispatch(UpdateTaskAssignees({ id: task._id, oldTask: task, payload: taskData, navigate }));
    };

    useEffect(() => {
        if (user) {
            const options: any[] = [];
            const taskAssignees: any[] = [];

            users.forEach((userRow) => {
                if (user.role === Roles.ADMINISTRATOR || userRow._id === user._id)
                    options.push({ value: userRow._id, label: userRow.name });
            });
            setUsersOption(options);

            task.assignees.forEach((assignee) => {
                if (user.role === Roles.ADMINISTRATOR || assignee === user._id) {
                    const filtereduser = filterUsersById(users, assignee);
                    if (filtereduser)
                        taskAssignees.push({ value: filtereduser._id, label: filtereduser.name });
                }
            });
            setAssignees(taskAssignees);
        }
    }, [task, user]);

    return (
        <div className="bg-white rounded-md w-full">
            <div className="p-3 md:p-4 text-gray-800 text-base md:text-xl font-medium md:font-semibold">
                Assignees Info
            </div>
            <hr className="border-gray-300" />
            <div className="p-3 md:p-4">
                <div className="mt-3 md:mt-5">
                    <FormikLabel
                        showLabel
                        name="assignees"
                        label="Assignees"
                        labelClass="text-gray-700"
                        inputNumber={7}
                    />
                    <Select
                        options={usersOption}
                        value={assignees}
                        onChange={(value) => handleAssigneesChange(value)}
                        isMulti
                    />
                </div>
                <Button
                    disabled={updateTaskAssigneesLoading}
                    onClick={onSubmit}
                    color="primary"
                    large
                    className="w-full mt-5 md:mt-6 flex justify-center  items-center"
                >
                    {updateTaskAssigneesLoading ? (
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
