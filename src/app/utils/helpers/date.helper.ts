import moment from 'moment';

export const displayTimestamp = (date: string): string => {
    return moment().format('D MMM YYYY');
};
