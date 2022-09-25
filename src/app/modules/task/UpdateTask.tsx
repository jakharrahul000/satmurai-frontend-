import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { FormikControl, Button, Spinner, FormikLabel, DatePicker } from '../../modules/core';
import { TaskPriority, TaskStatus } from 'app/utils';
import { ICreateTask, ITask, IUpdateTask } from '../../interfaces';
import { useAppDispatch } from 'store/store';
import { CreateTask, UpdateTaskInfo } from 'store/thunks';
import { getCreateLoading, getUpdateTaskLoading, getUser, getUsersList } from 'store/selectors';
import Select from 'react-select';
import { useEffect } from 'react';

interface IProps {
    task: ITask;
}

interface ITaskUpdateForm {
    title?: string;
    sizeEstimate?: number;
    description?: string;
}

const priorityOptions = [
    { value: TaskPriority.LOW, label: 'Low' },
    { value: TaskPriority.NORMAL, label: 'Normal' },
    { value: TaskPriority.HIGH, label: 'High' },
    { value: TaskPriority.URGENT, label: 'Urgent' },
];

export const UpdateTask = ({ task }: IProps) => {
    const user = useSelector(getUser);
    const users = useSelector(getUsersList);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [dueDate, setDueDate] = useState(new Date());
    const [priority, setPriority] = useState({ value: TaskPriority.LOW, label: 'Low' });
    const updateTaskLoading = useSelector(getUpdateTaskLoading);
    const [initialValues, setInitialValues] = useState<ITaskUpdateForm>({
        title: '',
        description: '',
        sizeEstimate: 0,
    });

    const validationSchema = yup.object({
        title: yup
            .string()
            .required('Field is required')
            .max(240, 'Maximum characters length can be 30')
            .min(5, 'Minimum characters length should be 5'),
    });

    useEffect(() => {
        setInitialValues({
            title: task.title,
            description: task.description ? task.description : '',
            sizeEstimate: task.sizeEstimate,
        });

        setPriority(priorityOptions[task.priority - 1]);
        setDueDate(new Date(task.dueDate));
    }, [task]);

    const handlePriorityChange = (value: any) => {
        setPriority(value);
    };

    const onSubmit = ({ title, description, sizeEstimate }: ITaskUpdateForm) => {
        const taskData: IUpdateTask = {
            title,
            dueDate,
            sizeEstimate,
            priority: priority.value,
            description,
        };

        dispatch(UpdateTaskInfo({ id: task._id, oldTask: task, payload: taskData, navigate }));
    };

    return (
        <div className="bg-white rounded-md w-full">
            <div className="p-3 md:p-4 text-gray-800 text-base md:text-xl font-medium md:font-semibold">
                Basic Info
            </div>
            <hr className="border-gray-300" />
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                validateOnChange={false}
                enableReinitialize
            >
                {() => (
                    <Form className="p-3 md:p-4">
                        <FormikControl inputNumber={1} label="Title" name="title" required />
                        <FormikControl inputNumber={2} label="Description" name="description" />
                        <FormikControl
                            inputNumber={3}
                            label="Size Estimate In Days"
                            name="sizeEstimate"
                            type="number"
                        />
                        <div className="mt-3 md:mt-5">
                            <FormikLabel
                                showLabel
                                name="priority"
                                label="Priority"
                                labelClass="text-gray-700"
                                inputNumber={4}
                            />
                            <Select
                                options={priorityOptions}
                                value={priority}
                                onChange={(value) => handlePriorityChange(value)}
                            />
                        </div>
                        <div className="mt-3 md:mt-5">
                            <FormikLabel
                                showLabel
                                name="startDate"
                                label="Start Date"
                                labelClass="text-gray-700"
                                inputNumber={5}
                            />
                            <DatePicker
                                name="dueDate"
                                setSelectedDate={setDueDate}
                                className="text-sm"
                            />
                        </div>
                        <Button
                            disabled={updateTaskLoading}
                            type="submit"
                            color="primary"
                            large
                            className="w-full mt-5 md:mt-6 flex justify-center  items-center"
                        >
                            {updateTaskLoading ? (
                                <div className="flex items-center gap-x-2.5">
                                    <Spinner />
                                    <span>Updating</span>
                                </div>
                            ) : (
                                <div>Update</div>
                            )}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
