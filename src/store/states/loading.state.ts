export interface ILoadingState {
    create: boolean;
    update: boolean;
    auth: boolean;
    usersList: boolean;
    tasksList: boolean;
    user: boolean;
    task: boolean;
    changeTaskStatus: boolean;
    updateTaskAssignees: boolean;
    updateTask: boolean;
    updateUserToAdminId: string;
}

export const loadingInitialState: ILoadingState = {
    create: false,
    update: false,
    auth: false,
    usersList: true,
    tasksList: true,
    user: true,
    task: true,
    changeTaskStatus: false,
    updateTaskAssignees: false,
    updateTask: false,
    updateUserToAdminId: '',
};
