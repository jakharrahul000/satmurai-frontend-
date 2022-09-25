import { IIcon } from 'app/interfaces/icon.interface';

export const HeartIcon = ({ primaryColor }: IIcon): JSX.Element => {
    return (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polygon points="0 0 24 0 24 24 0 24" />
            <path
                d="M16.5,4.5 C14.8905,4.5 13.00825,6.32463215 12,7.5 C10.99175,6.32463215 9.1095,4.5 7.5,4.5 C4.651,4.5 3,6.72217984 3,9.55040872 C3,12.6834696 6,16 12,19.5 C18,16 21,12.75 21,9.75 C21,6.92177112 19.349,4.5 16.5,4.5 Z"
                className={primaryColor + ' fill-current '}
                fillRule="nonzero"
            />
        </g>
    );
};
