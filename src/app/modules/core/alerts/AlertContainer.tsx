import React, { useEffect, useState } from 'react';
import { useTimeout } from '../../../hooks';
import { getAlertMsg } from 'store/selectors';
import { useAppDispatch } from 'store/store';
import { useSelector } from 'react-redux';
import { SetAlertMsg } from 'store/slices';
import { Alert } from '../alerts';

export const AlertContainer = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const [alert, setAlert] = useState<string | null>(null);
    const alertMsg = useSelector(getAlertMsg);
    const { reset, clear } = useTimeout(() => setAlert(null), 3000);

    useEffect(() => {
        if (alertMsg) {
            setAlert(alertMsg);
            dispatch(SetAlertMsg({ value: null }));
            reset();
        }
    }, [alertMsg]);

    // const close = () => {
    //     clear();
    //     setAlert(null);
    // };

    return <React.Fragment>{alert && <Alert alert={alert} />}</React.Fragment>;
};
