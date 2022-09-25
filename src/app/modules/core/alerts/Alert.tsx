import React from 'react';
import { useSelector } from 'react-redux';
import { getAlertType } from 'store/selectors';
import { AlertType } from 'app/utils';
import { Icon } from '../icons';

interface IProps {
    alert: string;
}

export const Alert = ({ alert }: IProps): JSX.Element => {
    const alertType = useSelector(getAlertType);

    const backgroundColor =
        alertType === AlertType.ERROR
            ? 'bg-alert-red-100 border-alert-red-200 text-alert-red-700'
            : alertType === AlertType.INFO
            ? 'bg-alert-blue-100 border-alert-blue-200 text-alert-blue-700'
            : alertType === AlertType.WARNING
            ? 'bg-alert-yellow-100 border-alert-yellow-200 text-alert-yellow-700'
            : alertType === AlertType.SUCCESS
            ? 'bg-alert-green-100 border-alert-green-200 text-alert-green-700'
            : 'bg-alert-red-100 border-alert-red-200 text-alert-red-700';

    return (
        <div className="fixed top-4 md:top-16 z-70 w-72 md:w-96 animate-fade-in-down mx-auto left-0 right-0 ">
            <div
                className={
                    backgroundColor +
                    ' w-full flex items-center justify-center text-sm rounded px-4 py-2 border gap-x-3 text-center'
                }
            >
                <Icon
                    primaryColor={
                        alertType === AlertType.ERROR
                            ? 'bg-alert-red-200'
                            : alertType === AlertType.INFO
                            ? 'bg-alert-blue-200'
                            : alertType === AlertType.WARNING
                            ? 'bg-alert-yellow-200'
                            : alertType === AlertType.SUCCESS
                            ? 'bg-alert-green-200'
                            : 'bg-alert-red-200'
                    }
                    icon={
                        alertType === AlertType.ERROR
                            ? 'error'
                            : alertType === AlertType.INFO
                            ? 'info'
                            : alertType === AlertType.WARNING
                            ? 'warning'
                            : alertType === AlertType.SUCCESS
                            ? 'success'
                            : 'error'
                    }
                    className="w-5"
                />
                <div dangerouslySetInnerHTML={{ __html: alert }}></div>
            </div>
        </div>
    );
};
