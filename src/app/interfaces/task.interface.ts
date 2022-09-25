export interface ITask {
    _id: string;
    title: string;
    dueDate: Date;
    sizeEstimate: number;
    status: string;
    priority: number;
    description: string;
    assignees: string[];
    owner: string;
    createdAt: string;
    updatedAt: string;
}

export interface ICreateTask {
    title: string;
    dueDate: Date;
    sizeEstimate: number;
    status: string;
    priority: number;
    description?: string;
    assignees: string[];
    owner: string;
}

export interface IChangeTaskStatus {
    status: string;
}

export interface IUpdateTaskAssignees {
    assignees: string[];
}

export interface IUpdateTask {
    title?: string;
    dueDate?: Date;
    sizeEstimate?: number;
    priority?: number;
    description?: string;
}

export interface ITaskResponse {
    status: string;
    data: ITask;
    message?: string;
}

export interface IGetTasksResponse {
    status: string;
    data: ITask[];
    message?: string;
}
