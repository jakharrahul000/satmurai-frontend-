import { IChangeUserRole, IUser } from '../../interfaces';
import { useAppDispatch } from 'store/store';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../modules/core';
import { Roles } from 'app/utils';
import { ChangeUserRole } from 'store/thunks/user/user.thunk';

interface IProps {
    user: IUser;
}

export const IndividualUser = ({ user }: IProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const changeRole = () => {
        const data: IChangeUserRole = {
            role: user.role === Roles.ADMINISTRATOR ? Roles.COLLABORATOR : Roles.ADMINISTRATOR,
        };
        dispatch(ChangeUserRole({ id: user._id, payload: data, oldUser: user, navigate }));
    };

    return (
        <div className="bg-white rounded-md w-full flex items-center justify-between p-3 md:p-4">
            <div className="text-gray-800 text-sm">{user.name}</div>
            <Button
                onClick={changeRole}
                color="secondary"
                large
                className="flex justify-center  items-center"
            >
                {`Make ${user.role === Roles.ADMINISTRATOR ? 'Collaborator' : 'Administrator'}`}
            </Button>
        </div>
    );
};
