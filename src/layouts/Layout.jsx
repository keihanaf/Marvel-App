import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Slider from './Slider';
import MobileNavbar from './MobileNavbar';

function Layout() {
    return (
        <div className="flex h-screen bg-[#121212] text-white overflow-hidden">
            <Slider />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 overflow-y-auto pb-[70px] md:pb-0">
                    <Outlet />
                </main>
                <MobileNavbar />
            </div>
        </div>
    )
}

export default Layout;
