import React from 'react';
import {
    CloseIcon,
    SearchIcon,
    ArrowUpIcon,
    ArrowLeftIcon,
    ArrowDownIcon,
    ReplyIcon,
    HeartIcon,
    ShareIcon,
    CommentIcon,
    AnswerIcon,
    BookmarkIcon,
    RecentSearchIcon,
    SendIcon,
    AngleLeftIcon,
    AngleRightIcon,
    CopyIcon,
    SettingIcon,
    PlusIcon,
    AngleDownIcon,
    ErrorIcon,
    WarningIcon,
    InfoIcon,
    SuccessIcon,
    CircleCheckIcon,
    ArrowDoubtleRightIcon,
    AngleUpIcon,
    QuestionCircle,
    CheckIcon,
} from './components';

const defaultStyles = { verticalAlign: 'middle' };

interface IProps extends React.HTMLAttributes<HTMLElement> {
    primaryColor: string;
    secondaryColor?: string;
    icon: string;
    viewBox?: string;
    style?: React.CSSProperties;
    className?: string;
}

export const Icon = ({
    primaryColor = 'text-black',
    secondaryColor,
    icon,
    className = '',
    style = {},
    viewBox = '0 0 24 24',
    ...props
}: IProps): JSX.Element => {
    const styles = { ...defaultStyles, ...style };

    const icons: any = {
        close: <CloseIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        search: <SearchIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        arrowup: <ArrowUpIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        arrowleft: <ArrowLeftIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        arrowdown: <ArrowDownIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        reply: <ReplyIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        heart: <HeartIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        share: <ShareIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        comment: <CommentIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        answer: <AnswerIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        bookmark: <BookmarkIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        recentsearch: (
            <RecentSearchIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />
        ),
        send: <SendIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        angleleft: <AngleLeftIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        angleright: <AngleRightIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        copy: <CopyIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        setting: <SettingIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        plus: <PlusIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        angledown: <AngleDownIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        angleup: <AngleUpIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        error: <ErrorIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        warning: <WarningIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        info: <InfoIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        success: <SuccessIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
        circlecheck: (
            <CircleCheckIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />
        ),
        arrowDoubtleRightIcon: (
            <ArrowDoubtleRightIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />
        ),
        questioncircle: (
            <QuestionCircle primaryColor={primaryColor} secondaryColor={secondaryColor} />
        ),
        check: <CheckIcon primaryColor={primaryColor} secondaryColor={secondaryColor} />,
    };

    return (
        <div {...props}>
            <svg
                className={className}
                style={styles}
                viewBox={viewBox}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                {icons[icon]}
            </svg>
        </div>
    );
};
