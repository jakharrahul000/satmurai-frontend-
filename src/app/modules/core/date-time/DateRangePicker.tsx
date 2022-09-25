import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface IProps {
    className?: string;
    startDateClassName?: string;
    endDateClassName?: string;
    rangeStartDate: Date;
    rangeEndDate: Date;
    setRangeStartDate: React.Dispatch<React.SetStateAction<Date>>;
    setRangeEndDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const DateRangePicker = ({
    className,
    startDateClassName,
    endDateClassName,
    rangeStartDate,
    rangeEndDate,
    setRangeStartDate,
    setRangeEndDate,
}: IProps): JSX.Element => {
    const [minDate, setMinDate] = useState(new Date());

    const onStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Date.parse(event.target.value.toString())) === false) {
            setRangeStartDate(new Date(event.target.value));
        }
    };

    const onEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Date.parse(event.target.value.toString())) === false) {
            setRangeEndDate(new Date(event.target.value));
        }
    };

    return (
        <div className={className + ' w-full flex flex-col items-center gap-y-2'}>
            <span className="font-medium text-base text-gray-800">Select Range</span>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-y-3 gap-x-3">
                <input
                    type="date"
                    defaultValue={moment(rangeStartDate).format('YYYY-MM-DD')}
                    onChange={onStartDateChange}
                    min={moment(minDate).format('YYYY-MM-DD')}
                    max={moment(rangeEndDate).format('YYYY-MM-DD')}
                    className={
                        startDateClassName +
                        ' border border-solid border-gray-600 rounded py-0.5 px-2 outline-none'
                    }
                    required
                />
                <input
                    type="date"
                    defaultValue={moment(rangeEndDate).format('YYYY-MM-DD')}
                    onChange={onEndDateChange}
                    min={moment(rangeStartDate).format('YYYY-MM-DD')}
                    max={moment(new Date()).format('YYYY-MM-DD')}
                    className={
                        endDateClassName +
                        ' border border-solid border-gray-600 rounded py-0.5 px-2 outline-none'
                    }
                    required
                />
            </div>
        </div>
    );
};
