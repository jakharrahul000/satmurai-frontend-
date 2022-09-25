import { getTask, getTaskLoading, getUsersList } from 'store/selectors';
import { useAppDispatch } from 'store/store';
import { GetTask } from 'store/thunks';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../../modules/core';
import { IUser } from '../../interfaces';
import { displayTimestamp, filterUsersById } from '../../utils';
import { HeaderLayout, OneChildLayout } from '../../../app/modules/layouts';

const priorities = ['Low', 'Normal', 'High', 'Urgent'];

export const TaskDetails = () => {
    const { id } = useParams();
    const users = useSelector(getUsersList);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const task = useSelector(getTask);
    const taskLoading = useSelector(getTaskLoading);
    const [assignees, setAssignees] = useState<IUser[]>([]);
    const [owner, setOwner] = useState<IUser | null>(null);

    const goToTaskEdit = () => {
        if (id) navigate(`/task/${id}/edit`);
    };

    useEffect(() => {
        if (id && (!task || task._id !== id)) {
            dispatch(GetTask({ id, navigate }));
        }
    }, []);

    useEffect(() => {
        if (id && task && task._id === id && users.length > 0) {
            const taskAssignees: IUser[] = [];
            task.assignees.forEach((assignee) => {
                const filtereduser = filterUsersById(users, assignee);
                if (filtereduser) taskAssignees.push(filtereduser);
            });
            setAssignees(taskAssignees);

            const taskOwner = filterUsersById(users, task.owner);
            setOwner(taskOwner);
        }
    }, [task, users]);

    return (
        <HeaderLayout>
            <OneChildLayout>
                {id && task && task._id === id && (
                    <>
                        <div className="flex items-center justify-between">
                            <div className="font-medium text-base">Tasks Info</div>
                            <Button
                                onClick={goToTaskEdit}
                                color="primary"
                                large
                                className="flex justify-center  items-center"
                            >
                                Edit
                            </Button>
                        </div>
                        <hr className="border-gray-400 mt-2 mb-4" />
                        <div className="mt-6 flex flex-col gap-y-2">
                            <div className="flex items-center gap-x-3">
                                <div className="flex-none w-40 md:w-40 font-medium">Title</div>
                                <div>{task.title}</div>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <div className="flex-none w-40 md:w-40 font-medium">Due Date</div>
                                <div>{displayTimestamp(task.dueDate.toString())}</div>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <div className="flex-none w-40 md:w-40 font-medium">
                                    Size Estimate
                                </div>
                                <div>{`${task.sizeEstimate} Days`}</div>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <div className="flex-none w-40 md:w-40 font-medium">Status</div>
                                <div>{task.status}</div>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <div className="flex-none w-40 md:w-40 font-medium">Priority</div>
                                <div>{priorities[task.priority - 1]}</div>
                            </div>
                            {owner && (
                                <div className="flex items-center gap-x-3">
                                    <div className="flex-none w-40 md:w-40 font-medium">Owner</div>
                                    <div>{owner.name}</div>
                                </div>
                            )}
                            {task.description && (
                                <div className="flex items-center gap-x-3">
                                    <div className="flex-none w-40 md:w-40 font-medium">
                                        Description
                                    </div>
                                    <div>{task.description}</div>
                                </div>
                            )}
                            {assignees.length > 0 && (
                                <div className="flex items-center gap-x-3">
                                    <div className="flex-none w-40 md:w-40 font-medium">
                                        Assignees
                                    </div>
                                    {assignees.map((assignee, index) => {
                                        return (
                                            <span key={assignee._id}>{`${assignee.name}${
                                                index !== assignees.length - 1 ? ',' : ''
                                            }`}</span>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </>
                )}
            </OneChildLayout>
        </HeaderLayout>
    );
};
