import { getTasksList, getTasksListLoading } from 'store/selectors';
import { useAppDispatch } from 'store/store';
import { GetTasks } from 'store/thunks';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HeaderLayout, OneChildLayout } from '../../../app/modules/layouts';
import { Button } from '../../modules/core';
import { TaskStatus } from 'app/utils';
import { ITask } from '../../interfaces';
import { TasksCard } from '../../modules/task';

export const TasksList = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const tasks = useSelector(getTasksList);
    const tasksListLoading = useSelector(getTasksListLoading);
    const [todoTasks, setTodoTasks] = useState<ITask[]>([]);
    const [progressTasks, setProgressTasks] = useState<ITask[]>([]);
    const [reviewTasks, setReviewTasks] = useState<ITask[]>([]);
    const [doneTasks, setDoneTasks] = useState<ITask[]>([]);

    const goToTaskCreate = () => {
        navigate('/task/create');
    };

    useEffect(() => {
        if (tasks.length === 0) {
            dispatch(GetTasks({ navigate }));
        }
    }, []);

    useEffect(() => {
        const tTasks: ITask[] = [];
        const pTasks: ITask[] = [];
        const rTasks: ITask[] = [];
        const dTasks: ITask[] = [];

        tasks.forEach((task) => {
            if (task.status === TaskStatus.TODO) tTasks.push(task);
            if (task.status === TaskStatus.PROGRESS) pTasks.push(task);
            if (task.status === TaskStatus.REVIEW) rTasks.push(task);
            if (task.status === TaskStatus.DONE) dTasks.push(task);
        });

        setTodoTasks(tTasks);
        setProgressTasks(pTasks);
        setReviewTasks(rTasks);
        setDoneTasks(dTasks);
    }, [tasks]);

    return (
        <HeaderLayout>
            <OneChildLayout>
                <div className="flex items-center justify-between">
                    <div className="font-medium text-base">Tasks List</div>
                    <Button
                        onClick={goToTaskCreate}
                        color="primary"
                        large
                        className="flex justify-center  items-center"
                    >
                        Create
                    </Button>
                </div>
                <hr className="border-gray-400 mt-2 mb-4" />
                <div className="mt-6 flex flex-col gap-y-5">
                    {doneTasks.length > 0 && <TasksCard heading="Done Tasks" tasks={doneTasks} />}
                    {reviewTasks.length > 0 && (
                        <TasksCard heading="Review Tasks" tasks={reviewTasks} />
                    )}
                    {progressTasks.length > 0 && (
                        <TasksCard heading="Progress Tasks" tasks={progressTasks} />
                    )}
                    {todoTasks.length > 0 && <TasksCard heading="ToDo Tasks" tasks={todoTasks} />}
                </div>
            </OneChildLayout>
        </HeaderLayout>
    );
};
