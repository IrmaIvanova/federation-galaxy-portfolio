import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/tailwind.css'
import { CustomLink, Typography } from '@packages/shared/src';
import { UsersList } from '@/pages/usersList';
import { codeExamplesRoutes } from '@packages/shared/src/routes/code-examples';


export const App: React.FC = () => {



    return (
        <div data-testid={"App.datatestID"}>
            <Typography variant='h1'>
                code-examples MODULE
            </Typography>
            {/* 
            <UsersList /> */}
            <CustomLink to={codeExamplesRoutes.main} children='Пример списка пользователей'/>
            <CustomLink to={codeExamplesRoutes.cards.base} children='Карточки с вопросами'/>
            <Outlet />
        </div>
    )
}