import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar/Navbar';
import Firstpage from '../components/FirstPage/Firstpage';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Firstpage></Firstpage> */}
            <Outlet></Outlet>

        </div>
    );
};

export default Main;