import { getTask, getUser } from 'store/selectors';
import { useAppDispatch } from 'store/store';
import { DeleteTask, GetTask } from 'store/thunks';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../modules/core';
import { HeaderLayout, OneChildLayout } from '../../../app/modules/layouts';
import { Roles } from 'app/utils';
import { UpdateTask, UpdateTaskAssignee, UpdateTaskStatus } from '../../modules/task';

const priorities = ['Low', 'Normal', 'High', 'Urgent'];

export const TaskEdit = () => {
    const { id } = useParams();
    const user = useSelector(getUser);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const task = useSelector(getTask);

    const deleteTask = () => {
        if (id) dispatch(DeleteTask({ id, navigate }));
    };

    useEffect(() => {
        if (id && (!task || task._id !== id)) {
            dispatch(GetTask({ id, navigate }));
        }
    }, []);

    return (
        <HeaderLayout>
            <OneChildLayout>
                {id && task && task._id === id && (
                    <>
                        <div className="flex items-center justify-between">
                            <div className="font-medium text-base">Tasks Info</div>
                            {user &&
                                (user.role === Roles.ADMINISTRATOR || task.owner === user._id) && (
                                    <Button
                                        onClick={deleteTask}
                                        color="warn"
                                        large
                                        className="flex justify-center  items-center"
                                    >
                                        Delete
                                    </Button>
                                )}
                        </div>
                        <hr className="border-gray-400 mt-2 mb-4" />
                        <div className="mt-6 flex flex-col gap-y-5">
                            {user &&
                                (user.role === Roles.ADMINISTRATOR || task.owner === user._id) && (
                                    <UpdateTask task={task} />
                                )}
                            <UpdateTaskStatus task={task} />
                            {user &&
                                (user.role === Roles.ADMINISTRATOR || task.owner === user._id) && (
                                    <UpdateTaskAssignee task={task} />
                                )}
                        </div>
                    </>
                )}
            </OneChildLayout>
        </HeaderLayout>
    );
};
