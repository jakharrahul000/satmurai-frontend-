import jwt_decode from 'jwt-decode';
import { IJWTToken } from '@interfaces';

/**
 * Decode given jwt token
 * @param token token to decode
 * @returns decoded json
 */
export const decodeJWTToken = (token: string): IJWTToken => {
    const decodedToken = jwt_decode<IJWTToken>(token);

    return decodedToken;
};

/**
 * Check if given jwt token is expired or not
 * @param token token to check
 * @returns false if token is expired, otherwise true
 */
export const checkIfJWTTokenIsExpired = (token: string): boolean => {
    const decodedToken = decodeJWTToken(token);

    const expiryTime = decodedToken.exp;
    const currentTime = Date.now();

    if (expiryTime * 1000 > currentTime) return false;
    return true;
};
