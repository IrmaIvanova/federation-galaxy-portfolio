import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/tailwind.css'
import { Container, CustomLink, Section, ThemeToggle, Typography } from '@packages/shared/src';
import { UsersList } from '@/pages/usersList';
import { codeExamplesRoutes } from '@packages/shared/src/routes/code-examples';
import { Cards } from '@/pages/cards/Cards';
import { useLocation, useParams } from "react-router-dom";


export const App: React.FC = () => {
  
    return (
        <Container >
            <ThemeToggle />

            <Section className='flex'>
                <Section>
                    <Typography variant="h3" children={"Примеры кода"} className='my-8' />

                    <CustomLink to={codeExamplesRoutes.main} variant='primary' nav children='Пример списка пользователей' />

                </Section>
                <Section>

                    <Typography variant="h3" children={"карточки по темам"} className='my-8' />

                    <Cards />
                </Section>
            </Section>
            <Outlet />
        </Container>
    )
}