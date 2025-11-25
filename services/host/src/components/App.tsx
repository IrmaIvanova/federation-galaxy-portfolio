import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { portfolioRoutes } from '@packages/shared/src/routes/portfolio'
import { codeExamplesRoutes } from '@packages/shared/src/routes/code-examples'

export const App: React.FC = () => {


    return (
        <div data-testid={"App.datatestID"}>
            <h1>
                PAGE
            </h1>
            <Link to={portfolioRoutes.about}> ABOUT</Link>
            <br />
            <Link to={codeExamplesRoutes.main}>CODE EXAMPLES</Link>
            <Outlet />
        </div>
    )
}