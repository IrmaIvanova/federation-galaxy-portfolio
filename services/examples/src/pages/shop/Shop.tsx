import React, { useState } from 'react';
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom';
import { codeExamplesRoutes } from '@packages/shared/src/routes/code-examples'
import { Section, Grid, Card, Button } from '@packages/shared/src'


const Shop: React.FC = () => {

    return (

        <Section>
            <h1>ABOUT</h1>
            <h1>SHOP codeExamplesRoutes</h1>
            <Link to={codeExamplesRoutes.second}> go to second PAGE</Link>
            <Outlet />
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
               




            </Grid>

        </Section>


    )
}

export default Shop;