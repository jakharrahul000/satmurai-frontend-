import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface IProps {
    className?: string;
    name: string;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
    defaultValue?: Date;
}

export const DatePicker = ({
    name,
    setSelectedDate,
    className,
    defaultValue,
}: IProps): JSX.Element => {
    const [minDate, setMinDate] = useState(new Date());

    const onDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Date.parse(event.target.value.toString())) === false) {
            setSelectedDate(new Date(event.target.value));
        }
    };

    return (
        <input
            type="date"
            name={name}
            defaultValue={moment(defaultValue ? defaultValue : new Date()).format('YYYY-MM-DD')}
            onChange={onDateChange}
            min={moment(minDate).format('YYYY-MM-DD')}
            className={
                className +
                ' text-gray-700 border border-solid border-gray-600 rounded py-0.5 px-2 outline-none'
            }
            required
        />
    );
};
