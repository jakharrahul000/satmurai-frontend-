import { IUser } from '../../interfaces';

/**
 * filter an array of users by id
 * @param users array of users to filter from
 * @param id id of the user to filter
 * @returns filtered user or null
 */
export const filterUsersById = (users: IUser[], id: string): IUser | null => {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user._id === id) return user;
    }

    return null;
};
