export interface IUser {
    _id: string;
    email: string;
    password: string;
    role: string;
    name: string;
    token?: string;
    createdAt: string;
    updatedAt: string;
}

export interface IChangeUserRole {
    role: string;
}

export interface IGetUsersResponse {
    status: string;
    data: IUser[];
    message?: string;
}

export interface IUserResponse {
    status: string;
    data: IUser;
    message?: string;
}
