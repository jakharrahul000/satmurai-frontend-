import React, { useEffect, useRef, useState } from 'react';
import { DateRangePicker, Button } from '../';
import { HiCalendar } from 'react-icons/hi';
import moment from 'moment';

interface IProps {
    onRangeSelect: (rangeStartDate: Date, rangeEndDate: Date) => void;
    showRangeAsLabel?: boolean;
}

export const DateRangePickerContainer = ({
    onRangeSelect,
    showRangeAsLabel = false,
}: IProps): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);
    const [rangeVisibility, setRangeVisibility] = useState(false);
    const todayDate = new Date();
    const [rangeStartDate, setRangeStartDate] = useState(
        new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() - 6),
    );
    const [rangeEndDate, setRangeEndDate] = useState(todayDate);

    const onApply = () => {
        onRangeSelect(rangeStartDate, rangeEndDate);
        setRangeVisibility(false);
    };

    useEffect(() => {
        const listener = (e: any) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setRangeVisibility(false);
            }
        };

        document.addEventListener('click', listener);
        document.addEventListener('focusin', listener);

        return () => {
            document.removeEventListener('click', listener);
            document.removeEventListener('focusin', listener);
        };
    }, []);

    return (
        <div className="relative z-10" ref={ref}>
            <div
                className="flex justify-center items-center gap-x-2 border border-solid border-gray-500 px-3 rounded-md cursor-pointer"
                onClick={() => {
                    setRangeVisibility(!rangeVisibility);
                }}
            >
                <span className="text-gray-800">
                    {showRangeAsLabel
                        ? `${moment(rangeStartDate).format('YYYY-MM-DD')}/${moment(
                              rangeEndDate,
                          ).format('YYYY-MM-DD')}`
                        : 'Custom'}
                </span>
                <HiCalendar className="flex-none w-7 h-7 p-1 rounded-full text-gray-600" />
            </div>
            <div
                className={
                    (rangeVisibility ? '' : 'hidden ') +
                    ' absolute top-9 flex flex-col items-end gap-y-3 bg-white shadow-2xl px-2.5 pb-2.5 md:px-4 pt-2 md:pb-4 border border-solid border-gray-400 rounded-md'
                }
            >
                <DateRangePicker
                    startDateClassName="text-sm"
                    endDateClassName="text-sm"
                    rangeStartDate={rangeStartDate}
                    rangeEndDate={rangeEndDate}
                    setRangeStartDate={setRangeStartDate}
                    setRangeEndDate={setRangeEndDate}
                />
                <Button
                    disabled={
                        isNaN(Date.parse(rangeStartDate.toString())) === true ||
                        isNaN(Date.parse(rangeEndDate.toString())) === true
                    }
                    color="primary"
                    fontSize="small"
                    padding="px-3 py-1"
                    onClick={onApply}
                >
                    Apply
                </Button>
            </div>
        </div>
    );
};
