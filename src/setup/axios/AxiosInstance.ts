import { getJWTTokenFromLocalStorage } from 'app/utils';
import axios, { AxiosInstance } from 'axios';

/**
 * create axios instance
 * @param baseURL base url for api
 * @param token jwt token to add to header
 * @returns axios instance
 */
export const getAxiosInstance = (baseURL: string, token?: string): AxiosInstance => {
    const instance = axios.create({
        baseURL,
    });

    // Add jwt token to headers
    if (token) {
        instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        const jwtToken = getJWTTokenFromLocalStorage();

        // Attach jwt token to axios request header
        if (jwtToken) instance.defaults.headers.common.Authorization = `Bearer ${jwtToken}`;
    }

    return instance;
};
