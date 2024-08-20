import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Login from '../components/Login/Login';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    },
]);

