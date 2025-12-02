import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import '../styles/tailwind.css'
import { HeroSection } from './HeroSection';

export const App: React.FC = () => {


    return (
        <div data-testid={"App.datatestID"}>
            <HeroSection
                subtitle="Frontend Developer & UI/UX Enthusiast"
                title="Создаю современные веб-приложения с душой"
                description="Специализируюсь на React, TypeScript и современных подходах к разработке. Превращаю сложные задачи в элегантные решения."
                primaryAction={{
                    label: "Посмотреть проекты",
                    onClick: () => console.log("Scroll to projects")
                }}
                secondaryAction={{
                    label: "Связаться со мной",
                    onClick: () => console.log("Open contacts")
                }}
            />
            <Outlet />
        </div>
    )
}