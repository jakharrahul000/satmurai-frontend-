import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { FormikControl, Button, Spinner, FormikLabel, DatePicker } from '../../modules/core';
import { Roles, TaskPriority, TaskStatus } from 'app/utils';
import { ICreateTask } from '../../interfaces';
import { useAppDispatch } from 'store/store';
import { CreateTask } from 'store/thunks';
import { getCreateLoading, getUser, getUsersList } from 'store/selectors';
import Select from 'react-select';
import { useEffect } from 'react';
import { HeaderLayout, OneChildLayout } from '../../../app/modules/layouts';

interface ITaskForm {
    title: string;
    sizeEstimate: number;
    description: string;
}

const statusOptions = [
    { value: TaskStatus.TODO, label: 'ToDo' },
    { value: TaskStatus.PROGRESS, label: 'Progress' },
    { value: TaskStatus.REVIEW, label: 'Review' },
    { value: TaskStatus.DONE, label: 'Done' },
];

const priorityOptions = [
    { value: TaskPriority.LOW, label: 'Low' },
    { value: TaskPriority.NORMAL, label: 'Normal' },
    { value: TaskPriority.HIGH, label: 'High' },
    { value: TaskPriority.URGENT, label: 'Urgent' },
];

export const TaskCreate = () => {
    const user = useSelector(getUser);
    const users = useSelector(getUsersList);
    const [usersOption, setUsersOption] = useState<any[]>([]);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [dueDate, setDueDate] = useState(new Date());
    const [status, setStatus] = useState({ value: TaskStatus.TODO, label: 'ToDo' });
    const [priority, setPriority] = useState({ value: TaskPriority.LOW, label: 'Low' });
    const [assignees, setAssignees] = useState<any>();
    const createLoading = useSelector(getCreateLoading);

    const initialValues: ITaskForm = {
        title: '',
        description: '',
        sizeEstimate: 0,
    };

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

    const handlePriorityChange = (value: any) => {
        setPriority(value);
    };

    const handleAssigneesChange = (value: any) => {
        setAssignees(value);
    };

    const onSubmit = ({ title, description, sizeEstimate }: ITaskForm) => {
        if (user) {
            const taskAssignees: any[] = [];
            if (assignees) {
                assignees.forEach((assignee: any) => {
                    taskAssignees.push(assignee.value);
                });
            }

            const taskData: ICreateTask = {
                title,
                dueDate,
                sizeEstimate,
                status: status.value,
                priority: priority.value,
                assignees: taskAssignees,
                owner: user._id,
            };

            if (description.length > 0) taskData.description = description;
            dispatch(CreateTask({ payload: taskData, navigate }));
        }
    };

    useEffect(() => {
        if (user && users.length > 0) {
            const options: any[] = [];

            users.forEach((userRow) => {
                if (user.role === Roles.ADMINISTRATOR || userRow._id === user._id)
                    options.push({ value: userRow._id, label: userRow.name });
            });

            setUsersOption(options);
        }
    }, [users, user]);

    return (
        <HeaderLayout>
            <OneChildLayout>
                <div className="flex flex-col items-center">
                    <div className="rounded-2xl sm:shadow px-6 pb-6 md:px-10 md:pb-10 w-full max-w-lg flex flex-col content-center sm:mb-8 md:mb-16">
                        <div className="mb-5 md:mb-10 flex flex-col items-center">
                            <div className="text-gray-900 font-medium text-xl leading-normal md:leading-loose ">
                                Create Task
                            </div>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                            validateOnChange={false}
                        >
                            {() => (
                                <Form>
                                    <FormikControl
                                        inputNumber={1}
                                        label="Title"
                                        name="title"
                                        required
                                    />
                                    <FormikControl
                                        inputNumber={2}
                                        label="Description"
                                        name="description"
                                    />
                                    <FormikControl
                                        inputNumber={3}
                                        label="Size Estimate In Days"
                                        name="sizeEstimate"
                                        type="number"
                                    />
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
                                            defaultValue={statusOptions[0]}
                                        />
                                    </div>
                                    <div className="mt-3 md:mt-5">
                                        <FormikLabel
                                            showLabel
                                            name="priority"
                                            label="Priority"
                                            labelClass="text-gray-700"
                                            inputNumber={5}
                                        />
                                        <Select
                                            options={priorityOptions}
                                            value={priority}
                                            onChange={(value) => handlePriorityChange(value)}
                                            defaultValue={priorityOptions[0]}
                                        />
                                    </div>
                                    <div className="mt-3 md:mt-5">
                                        <FormikLabel
                                            showLabel
                                            name="startDate"
                                            label="Start Date"
                                            labelClass="text-gray-700"
                                            inputNumber={6}
                                        />
                                        <DatePicker
                                            name="dueDate"
                                            setSelectedDate={setDueDate}
                                            className="text-sm"
                                        />
                                    </div>
                                    {users.length > 0 && (
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
                                    )}
                                    <Button
                                        disabled={createLoading}
                                        type="submit"
                                        color="primary"
                                        large
                                        className="w-full mt-5 md:mt-6 flex justify-center  items-center"
                                    >
                                        {createLoading ? (
                                            <div className="flex items-center gap-x-2.5">
                                                <Spinner />
                                                <span>Creating</span>
                                            </div>
                                        ) : (
                                            <div>Submit</div>
                                        )}
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </OneChildLayout>
        </HeaderLayout>
    );
};
