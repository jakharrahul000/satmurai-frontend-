import { logout } from '../../utils/helpers';
import { useAppDispatch } from 'store/store';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface IProps {
    children: React.ReactNode;
    className?: string;
}

export const HeaderLayout = ({ children, className }: IProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        logout(dispatch);
        navigate('/');
    };

    return (
        <div className={className}>
            <div className="bg-white fixed w-full z-30 h-12 md:h-14 shadow-lg px-3 md:px-4 flex items-center justify-center gap-x-5">
                <Link to="/" className="hover:text-blue-500 hover:underline">
                    Tasks
                </Link>
                <Link to="/users" className="hover:text-blue-500 hover:underline">
                    Users
                </Link>
                <button onClick={onLogout} className="hover:text-blue-500 hover:underline">
                    Logout
                </button>
            </div>
            <div className="pt-12 md:pt-14 h-full min-h-screen ">{children}</div>
        </div>
    );
};
