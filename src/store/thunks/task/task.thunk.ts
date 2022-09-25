import { createAsyncThunk, Update } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { handleError } from 'app/utils';
import {
    IChangeTaskStatusThunk,
    ICreateTaskThunk,
    IDeleteTaskThunk,
    IGetTasksThunk,
    IGetTaskThunk,
    IUpdateTaskAssigneesThunk,
    IUpdateTaskThunk,
} from 'store/interfaces';
import {
    AddTasksListSuccess,
    DeleteTasksListSuccess,
    LoadTasksListSuccess,
    SetChangeTaskStatusLoading,
    SetCreateLoading,
    SetTask,
    SetTaskLoading,
    SetTasksListLoading,
    SetUpdateLoading,
    SetUpdateTaskAssigneesLoading,
    SetUpdateTaskLoading,
    UpdateTasksListSuccess,
} from 'store/slices';
import { getAxiosInstance } from 'setup';
import { apiUrl } from 'app/utils/processenv';
import { IGetTasksResponse, ITask, ITaskResponse } from '../../../app/interfaces';

/**
 * create task
 */
export const CreateTask = createAsyncThunk(
    'task/CreateTask',
    async ({ payload, navigate }: ICreateTaskThunk, { dispatch }) => {
        try {
            // Set create loading to true
            dispatch(SetCreateLoading({ value: true }));

            const AxiosInstance = getAxiosInstance(apiUrl);

            const response = await AxiosInstance({
                url: 'task',
                method: 'post',
                data: payload,
            });
            const data: ITaskResponse = response.data;

            dispatch(AddTasksListSuccess({ task: data.data }));
            dispatch(SetCreateLoading({ value: false }));
            navigate(`/task/${data.data._id}`);
        } catch (error) {
            handleError(error as AxiosError, dispatch, navigate);
            dispatch(SetCreateLoading({ value: false }));
        }
    },
);

/**
 * get all tasks
 */
export const GetTasks = createAsyncThunk(
    'task/GetTasks',
    async ({ navigate }: IGetTasksThunk, { dispatch }) => {
        try {
            // Set tasks list loading to true
            dispatch(SetTasksListLoading({ value: true }));

            const AxiosInstance = getAxiosInstance(apiUrl);

            const response = await AxiosInstance({
                url: 'task/all',
                method: 'get',
            });
            const data: IGetTasksResponse = response.data;

            dispatch(LoadTasksListSuccess({ tasks: data.data }));
            dispatch(SetTasksListLoading({ value: false }));
        } catch (error) {
            handleError(error as AxiosError, dispatch, navigate);
            dispatch(SetTasksListLoading({ value: false }));
        }
    },
);

/**
 * get tasks by id
 */
export const GetTask = createAsyncThunk(
    'task/GetTask',
    async ({ id, navigate }: IGetTaskThunk, { dispatch }) => {
        try {
            // Set task loading to true
            dispatch(SetTaskLoading({ value: true }));

            const AxiosInstance = getAxiosInstance(apiUrl);

            const response = await AxiosInstance({
                url: `task/${id}`,
                method: 'get',
            });
            const data: ITaskResponse = response.data;

            dispatch(SetTask({ task: data.data }));
            dispatch(SetTaskLoading({ value: false }));
        } catch (error) {
            handleError(error as AxiosError, dispatch, navigate);
            dispatch(SetTaskLoading({ value: false }));
        }
    },
);

/**
 * Update task details
 */
export const UpdateTaskInfo = createAsyncThunk(
    'task/UpdateTaskInfo',
    async ({ id, oldTask, payload, navigate }: IUpdateTaskThunk, { dispatch }) => {
        try {
            // Set update loading to true
            dispatch(SetUpdateTaskLoading({ value: true }));

            const AxiosInstance = getAxiosInstance(apiUrl);

            await AxiosInstance({
                url: `task/${id}`,
                method: 'patch',
                data: payload,
            });

            const newTask = { ...oldTask, ...payload };

            const updatedTask: Update<ITask> = {
                id,
                changes: {
                    ...payload,
                },
            };

            dispatch(SetTask({ task: newTask }));
            dispatch(UpdateTasksListSuccess({ task: updatedTask }));
            dispatch(SetUpdateTaskLoading({ value: false }));
            navigate(`/task/${id}`);
        } catch (error) {
            handleError(error as AxiosError, dispatch, navigate);
            dispatch(SetUpdateTaskLoading({ value: false }));
        }
    },
);

/**
 * Update task status
 */
export const ChangeTaskStatus = createAsyncThunk(
    'task/ChangeTaskStatus',
    async ({ id, oldTask, payload, navigate }: IChangeTaskStatusThunk, { dispatch }) => {
        try {
            // Set update loading to true
            dispatch(SetChangeTaskStatusLoading({ value: true }));

            const AxiosInstance = getAxiosInstance(apiUrl);

            await AxiosInstance({
                url: `task/${id}/updateStatus`,
                method: 'patch',
                data: payload,
            });

            const newTask = { ...oldTask, ...payload };

            const updatedTask: Update<ITask> = {
                id,
                changes: {
                    ...payload,
                },
            };

            dispatch(SetTask({ task: newTask }));
            dispatch(UpdateTasksListSuccess({ task: updatedTask }));
            dispatch(SetChangeTaskStatusLoading({ value: false }));
            navigate(`/task/${id}`);
        } catch (error) {
            handleError(error as AxiosError, dispatch, navigate);
            dispatch(SetChangeTaskStatusLoading({ value: false }));
        }
    },
);

/**
 * Update task assignee
 */
export const UpdateTaskAssignees = createAsyncThunk(
    'task/UpdateTaskAssignees',
    async ({ id, oldTask, payload, navigate }: IUpdateTaskAssigneesThunk, { dispatch }) => {
        try {
            // Set update loading to true
            dispatch(SetUpdateTaskAssigneesLoading({ value: true }));

            const AxiosInstance = getAxiosInstance(apiUrl);

            await AxiosInstance({
                url: `task/${id}/updateAssignee`,
                method: 'patch',
                data: payload,
            });

            const newTask = { ...oldTask, ...payload };

            const updatedTask: Update<ITask> = {
                id,
                changes: {
                    ...payload,
                },
            };

            dispatch(SetTask({ task: newTask }));
            dispatch(UpdateTasksListSuccess({ task: updatedTask }));
            dispatch(SetUpdateTaskAssigneesLoading({ value: false }));
            navigate(`/task/${id}`);
        } catch (error) {
            handleError(error as AxiosError, dispatch, navigate);
            dispatch(SetUpdateTaskAssigneesLoading({ value: false }));
        }
    },
);

/**
 * delete task
 */
export const DeleteTask = createAsyncThunk(
    'task/DeleteTask',
    async ({ id, navigate }: IDeleteTaskThunk, { dispatch }) => {
        try {
            // Set create loading to true
            dispatch(SetCreateLoading({ value: true }));

            const AxiosInstance = getAxiosInstance(apiUrl);

            await AxiosInstance({
                url: `task/${id}`,
                method: 'delete',
            });

            dispatch(DeleteTasksListSuccess({ id }));
            dispatch(SetCreateLoading({ value: false }));
            navigate('/');
        } catch (error) {
            handleError(error as AxiosError, dispatch, navigate);
            dispatch(SetCreateLoading({ value: false }));
        }
    },
);
