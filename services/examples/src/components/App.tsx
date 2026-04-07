import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/tailwind.css'
import { Container, NavMenu, Section, Typography } from '@packages/shared/src';
import { examplesMenuData, cardsMenuData } from '@/pages/examplesNavData/ExamplesMenuData';

export const App: React.FC = () => {

    return (
        <Container>
            <Section padding='none'>
                <Section>
                    <Typography variant="h3" children={"Карточки по темам"} className='my-8' />

                    <NavMenu options={cardsMenuData} />
                </Section>
                <Section>
                    <Typography variant="h3" children={"Примеры кода"} className='my-8' />

                    <NavMenu options={examplesMenuData} />

                </Section>
            </Section>
            <Outlet />
        </Container>
    )
}