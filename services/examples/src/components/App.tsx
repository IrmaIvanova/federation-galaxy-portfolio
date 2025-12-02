import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/tailwind.css'
import { Typography } from '@packages/shared/src';


export const App: React.FC = () => {


    return (
        <div data-testid={"App.datatestID"}>
            <Typography variant='h1'>
                code-examples MODULE
            </Typography>
            <Outlet />
        </div>
    )
}