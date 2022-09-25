import { IIcon } from 'app/interfaces/icon.interface';

export const PlusIcon = ({ primaryColor }: IIcon): JSX.Element => {
    return (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect
                className={primaryColor + ' fill-current '}
                x="4"
                y="11"
                width="16"
                height="2"
                rx="1"
            />
            <rect
                className={primaryColor + ' fill-current '}
                transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                x="4"
                y="11"
                width="16"
                height="2"
                rx="1"
            />
        </g>
    );
};
