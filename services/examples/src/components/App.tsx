import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/tailwind.css'
import { Container, NavMenu, Section, Typography } from '@packages/shared/src';
import { examplesMenuData, cardsMenuData } from '@/pages/examplesNavData/ExamplesMenuData';

export const App: React.FC = () => {

    return (
        <Container>
            <Section padding='none'>
                <NavMenu options={cardsMenuData} variant='vertical' />
            </Section>
            <Outlet />
        </Container>
    )
}