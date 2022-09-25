import { IIcon } from 'app/interfaces/icon.interface';

export const ArrowUpIcon = ({ primaryColor }: IIcon): JSX.Element => {
    return (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polygon points="0 0 24 0 24 24 0 24" />
            <rect
                className={primaryColor + ' fill-current'}
                x="11"
                y="5"
                width="2"
                height="14"
                rx="1"
            />
            <path
                d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
                className={primaryColor + ' fill-current'}
            />
        </g>
    );
};
