import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/tailwind.css'
import { CustomLink, Typography } from '@packages/shared/src';
import { UsersList } from '@/pages/usersList';
import { codeExamplesRoutes } from '@packages/shared/src/routes/code-examples';
import { Cards } from '@/pages/cards/Cards';


export const App: React.FC = () => {



    return (
        <div data-testid={"App.datatestID"}>
            <Typography variant='h1'>
                code-examples MODULE
            </Typography>

            <CustomLink to={codeExamplesRoutes.main} variant='primary'  nav children='Пример списка пользователей' />


            <Typography variant="h3" children={"карточки по темам"} className='my-8' />

            <Cards />
            <Outlet />
        </div>
    )
}