import { IUsersListState, UsersListAdapter } from 'store/states';
import { RootState } from 'store/store';

const getUsersListState = (state: RootState): IUsersListState => state.usersList;

export const usersListSelector = UsersListAdapter.getSelectors<RootState>(
    (state) => state.usersList,
);

export const getUsersList = usersListSelector.selectAll;
