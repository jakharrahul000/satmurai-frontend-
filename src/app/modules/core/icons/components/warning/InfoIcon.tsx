import { IIcon } from 'app/interfaces/icon.interface';

export const InfoIcon = ({ primaryColor }: IIcon): JSX.Element => {
    return (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect x="0" y="0" width="24" height="24" />
            <circle
                className={primaryColor + ' fill-current'}
                opacity="0.3"
                cx="12"
                cy="12"
                r="10"
            />
            <rect
                className={primaryColor + ' fill-current'}
                x="11"
                y="10"
                width="2"
                height="7"
                rx="1"
            />
            <rect
                className={primaryColor + ' fill-current'}
                x="11"
                y="7"
                width="2"
                height="2"
                rx="1"
            />
        </g>
    );
};
