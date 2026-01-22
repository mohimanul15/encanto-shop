import React from 'react';
import { Outlet } from 'react-router';

const Default = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Default;