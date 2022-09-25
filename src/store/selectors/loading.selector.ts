import { ILoadingState } from 'store/states';
import { RootState } from 'store/store';

const getLoadingState = (state: RootState): ILoadingState => state.loading;

export const getCreateLoading = (state: RootState): boolean => getLoadingState(state).create;
export const getUpdateLoading = (state: RootState): boolean => getLoadingState(state).update;
export const getAuthLoading = (state: RootState): boolean => getLoadingState(state).auth;
export const getUsersListLoading = (state: RootState): boolean => getLoadingState(state).usersList;
export const getTasksListLoading = (state: RootState): boolean => getLoadingState(state).tasksList;
export const getUserLoading = (state: RootState): boolean => getLoadingState(state).user;
export const getTaskLoading = (state: RootState): boolean => getLoadingState(state).task;
export const getChangeTaskStatusLoading = (state: RootState): boolean =>
    getLoadingState(state).changeTaskStatus;
export const getUpdateTaskAssigneesLoading = (state: RootState): boolean =>
    getLoadingState(state).updateTaskAssignees;
export const getUpdateTaskLoading = (state: RootState): boolean =>
    getLoadingState(state).updateTask;
export const getUpdateUserToAdminIdLoading = (state: RootState): string =>
    getLoadingState(state).updateUserToAdminId;
