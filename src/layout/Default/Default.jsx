import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';

const Default = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Default;