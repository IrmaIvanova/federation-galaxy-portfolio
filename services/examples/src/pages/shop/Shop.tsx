import React, { useState } from 'react';
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom';
import { codeExamplesRoutes } from '@packages/shared/src/routes/code-examples'
const Shop: React.FC = () => {

    return (
        <div>
            <h1>SHOP codeExamplesRoutes</h1>
            <Link to={codeExamplesRoutes.second}> go to second PAGE</Link>
            <Outlet />
        </div>
    )
}

export default Shop;