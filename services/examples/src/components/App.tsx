import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/tailwind.css'
import { Container, CustomLink, Section, Typography } from '@packages/shared/src';
import { codeExamplesRoutes } from '@packages/shared/src/routes/code-examples';
import { Cards } from '@/pages/cards/Cards';

export const App: React.FC = () => {

    return (
        <Container>
            <Section  padding='none'>
                <Section>
                    <Typography variant="h3" children={"Примеры кода"} className='my-8' />

                    <CustomLink to={codeExamplesRoutes.main} variant='primary' nav children='Пример списка пользователей' />

                </Section>
                <Section padding='none'>
                    <Typography variant="h3" children={"карточки по темам"} className='my-8' />

                    <Cards />
                </Section>
            </Section>
            <Outlet />
        </Container>
    )
}