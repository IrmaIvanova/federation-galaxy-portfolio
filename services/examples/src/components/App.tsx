import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/tailwind.css'
import { Container, NavMenu, Section, TwoColumnLayout } from '@packages/shared/src';
import { cardsMenuData } from '@/pages/examplesNavData/ExamplesMenuData';

export const App: React.FC = () => {
    return (
        <Container>
            <Section padding="md">
                <TwoColumnLayout
                    sidebar={<NavMenu options={cardsMenuData} variant="vertical" />}
                    content={<Outlet />}
                    sidebarWidth="1/4"
                    gap="lg"
                />
            </Section>
        </Container>
    );
};