import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login, Register } from 'app/pages/auth';

export const PublicRoutes = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
