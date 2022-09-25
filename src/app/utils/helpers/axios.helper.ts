import { AxiosError } from 'axios';
import { SetAlertMsg, SetAlertType } from 'store/slices';
import { AppDispatch } from 'store/store';
import { IHttpError } from '@interfaces';
import { NavigateFunction } from 'react-router-dom';
import { logout } from './auth.helper';
import { AlertType } from '../enums/alert.enum';

// handle error that occurs in axios request
export const handleError = (
    errorData: AxiosError,
    dispatch: any,
    navigate: NavigateFunction,
): void => {
    if (errorData.response) {
        const error: any = errorData.response.data;
        const status = errorData.response.status;

        if (status === 401) {
            logout(dispatch);
            navigate('/login');
        } else if (status === 404) {
            dispatch(SetAlertType({ value: AlertType.ERROR }));
            dispatch(SetAlertMsg({ value: 'Page not found' }));
        } else if (status === 406) {
            if (error.type === 'ERROR') {
                dispatch(SetAlertType({ value: AlertType.ERROR }));
            } else if (error.type === 'INFO') {
                dispatch(SetAlertType({ value: AlertType.INFO }));
            } else if (error.type === 'WARNING') {
                dispatch(SetAlertType({ value: AlertType.WARNING }));
            }
            dispatch(SetAlertMsg({ value: error.message }));
        } else {
            dispatch(SetAlertType({ value: AlertType.ERROR }));
            dispatch(SetAlertMsg({ value: 'Something went wrong. Refresh the page' }));
        }
    } else if (errorData.request) {
        dispatch(SetAlertType({ value: AlertType.ERROR }));
        dispatch(SetAlertMsg({ value: 'Network Error. Refresh the page' }));
    } else {
        console.log(errorData);
        dispatch(SetAlertType({ value: AlertType.ERROR }));
        dispatch(SetAlertMsg({ value: 'Something went wrong. Refresh the page' }));
    }
};

/**
 * download a file from response of axios
 * @param data data to download as file
 * @param type extension of file
 * @param disposition content-disposition header
 */
export const downloadFile = (data: any, type: string, disposition: string): void => {
    let filename = '';

    if (disposition) {
        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const matches = filenameRegex.exec(disposition);
        if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, '');
        }
    }

    // Create blob link to download
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename.length > 0 ? filename : `download.${type}`);

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    if (link && link.parentNode) link.parentNode.removeChild(link);
};
