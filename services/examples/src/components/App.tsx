import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/tailwind.css'


export const App: React.FC = () => {


    return (
        <div data-testid={"App.datatestID"}>
            <h1>
                code-examples MODULE
            </h1>
            <Outlet />
        </div>
    )
}