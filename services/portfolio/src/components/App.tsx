import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';



export const App: React.FC = () => {


    return (
        <div data-testid={"App.datatestID"}>
            <h1>
                PORTFOLIO Module
            </h1>          
            <Outlet />
        </div>
    )
}