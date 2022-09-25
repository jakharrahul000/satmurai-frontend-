import { HeaderLayout, OneChildLayout } from '../../modules/layouts';
import { getUsersList } from 'store/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { IndividualUser } from '../../modules/user';

export const UsersList = () => {
    const users = useSelector(getUsersList);

    return (
        <HeaderLayout>
            <OneChildLayout>
                <div className="flex items-center justify-between">
                    <div className="font-medium text-base">Users List</div>
                </div>
                <hr className="border-gray-400 mt-2 mb-4" />
                <div className="mt-6 flex flex-col gap-y-2">
                    {users.map((userRow) => {
                        return <IndividualUser user={userRow} key={userRow._id} />;
                    })}
                </div>
            </OneChildLayout>
        </HeaderLayout>
    );
};
