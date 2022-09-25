import { LogoutForToken, LogoutForUser } from 'store/slices';
import { AppDispatch } from 'store/store';

/**
 * store jwt token in local storage
 * @param token jwt token to store in local storage
 */
export const setJWTTokenInLocalStorage = (token: string): void => {
    localStorage.setItem('jwtToken', token);
};

/**
 * remove jwt token from local storage
 */
export const removeJWTTokenInLocalStorage = (): void => {
    localStorage.removeItem('jwtToken');
};

/**
 * get jwt token from local storage
 * @returns jwt token
 */
export const getJWTTokenFromLocalStorage = (): string | null => {
    const jwtToken = localStorage.getItem('jwtToken');
    return jwtToken ? jwtToken : null;
};

export const logout = (dispatch: AppDispatch): void => {
    removeJWTTokenInLocalStorage();
    dispatch(LogoutForUser());
    dispatch(LogoutForToken());
};
