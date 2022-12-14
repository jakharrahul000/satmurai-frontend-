import { IIcon } from 'app/interfaces/icon.interface';

export const CircleCheckIcon = ({ primaryColor, secondaryColor }: IIcon): JSX.Element => {
    return (
        <g stroke={secondaryColor} className={secondaryColor + ' fill-current '} fillRule="evenodd">
            <rect x="0" y="0" width="24" height="24" />
            <circle className={secondaryColor + ' fill-current '} cx="12" cy="12" r="10" />
            <path
                d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                className={primaryColor + ' fill-current '}
                fillRule="nonzero"
            />
        </g>
    );
};
