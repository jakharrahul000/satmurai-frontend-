import {
    IChangeTaskStatus,
    ICreateTask,
    ITask,
    IUpdateTask,
    IUpdateTaskAssignees,
} from '../../../app/interfaces';
import React from 'react';
import { NavigateFunction } from 'react-router-dom';

export interface ICreateTaskThunk {
    payload: ICreateTask;
    navigate: NavigateFunction;
}

export interface IGetTasksThunk {
    navigate: NavigateFunction;
}

export interface IGetTaskThunk {
    id: string;
    navigate: NavigateFunction;
}

export interface IChangeTaskStatusThunk {
    id: string;
    oldTask: ITask;
    payload: IChangeTaskStatus;
    navigate: NavigateFunction;
}

export interface IUpdateTaskAssigneesThunk {
    id: string;
    oldTask: ITask;
    payload: IUpdateTaskAssignees;
    navigate: NavigateFunction;
}

export interface IUpdateTaskThunk {
    id: string;
    oldTask: ITask;
    payload: IUpdateTask;
    navigate: NavigateFunction;
}

export interface IDeleteTaskThunk {
    id: string;
    navigate: NavigateFunction;
}
