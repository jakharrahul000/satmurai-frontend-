import { IUser } from '@interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@reduxjs/toolkit';

const sortByName = (a: any, b: any): number => {
    const compare = a.name.localeCompare(b.name);
    if (compare > 0) {
        return 1;
    }
    if (compare < 0) {
        return -1;
    }
    return compare;
};

export interface IUsersListState extends EntityState<IUser> {}
export const UsersListAdapter: EntityAdapter<IUser> = createEntityAdapter<IUser>({
    selectId: (user: IUser) => user._id,
    sortComparer: sortByName,
});

export const usersListInitialState: IUsersListState = UsersListAdapter.getInitialState({});
