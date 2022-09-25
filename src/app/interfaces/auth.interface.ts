import { IUser } from './user.interface';

export interface ILogin {
    password: string;
    email: string;
}

export interface IRegister {
    password: string;
    email: string;
    name: string;
}

export interface IJWTTokenResponse {
    expires: string;
    token: string;
}

export interface IJWTToken {
    exp: number;
    iat: number;
    _id: string;
}
