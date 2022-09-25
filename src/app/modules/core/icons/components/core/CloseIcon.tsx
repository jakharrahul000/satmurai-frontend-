import { IIcon } from 'app/interfaces/icon.interface';

export const CloseIcon = ({ primaryColor }: IIcon): JSX.Element => {
    return (
        <g
            id="Group"
            transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)"
            className={primaryColor + ' fill-current '}
        >
            <rect
                className={primaryColor + ' fill-current '}
                id="Rectangle-185"
                x="0"
                y="7"
                width="16"
                height="2"
                rx="1"
            ></rect>
            <rect
                className={primaryColor + ' fill-current '}
                id="Rectangle-185-Copy"
                transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000) "
                x="0"
                y="7"
                width="16"
                height="2"
                rx="1"
            ></rect>
        </g>
    );
};
