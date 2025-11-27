import React, { useState } from 'react';
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom';
import { Section, Grid, Card, Button } from '@packages/shared/src'

const About: React.FC = () => {

    return (
        <Section>
            <h1>ABOUT</h1>
            <Grid cols={1} md={2} lg={3} gap="md" className="mb-8">

                {/* Тест ховер-эффектов */}

                <Card padding="sm">
                    <h1>Мое приложение</h1>
                    <p>Использую общую дизайн-систему</p>
                    <div className="flex gap-4 mt-4">
                        <Button variant="primary">Основная кнопка</Button>
                        <Button variant="outline">Вторичная кнопка</Button>
                    </div>
                </Card>
                <Card padding="sm">
                    <h1>RCurucucu</h1>
                    <p>Использую общую дизайн-систему</p>

                </Card>
                <Card padding="sm">
                    <h1>Inposible</h1>
                    <p>Использую общую дизайн-систему</p>

                </Card>




            </Grid>
        </Section>
    )
}

export default About;