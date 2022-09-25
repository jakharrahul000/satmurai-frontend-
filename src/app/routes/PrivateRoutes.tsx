import React from 'react';
import { TaskCreate, TaskDetails, TaskEdit, TasksList } from 'app/pages/task';
import { UsersList } from 'app/pages/user';
import { Routes, Route, Navigate } from 'react-router-dom';

export const PrivateRoutes = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<TasksList />} />
            <Route path="/task/create" element={<TaskCreate />} />
            <Route path="/task/:id" element={<TaskDetails />} />
            <Route path="/task/:id/edit" element={<TaskEdit />} />

            <Route path="/users" element={<UsersList />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
