import React, { useEffect, useState } from 'react';
import { Spinner } from '../spinners';
import { useTimeout } from '../../../hooks';

interface IProps {
    message: string;
}

export const NoRecordFound = ({ message }: IProps): JSX.Element => {
    const [notFound, setNotFound] = useState(false);
    const { reset, clear } = useTimeout(() => {
        setNotFound(true);
    }, 10000);

    useEffect(() => {
        reset();
    }, []);

    return (
        <React.Fragment>
            {notFound ? (
                <div>{message}</div>
            ) : (
                <Spinner dimensions="w-12 h-12 md:w-14 md:h-14" className="mt-10" />
            )}
        </React.Fragment>
    );
};
