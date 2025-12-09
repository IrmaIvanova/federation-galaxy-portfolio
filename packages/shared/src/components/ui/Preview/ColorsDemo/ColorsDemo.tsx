import React, { useState } from 'react';
import { Section, Grid, GridItem } from '../../../Layout';
import { ColorCard } from './ColorCard/ColorCard';
import { Button } from '../../Button';

export interface ColorItem {
    name: string;
    light: string;
    dark: string;
    cssVar: string;
    description: string;
}


export const ColorSystemDemo: React.FC = () => {
    const [isDemoDark, setIsDemoDark] = useState(false);

    const colorItems: ColorItem[] = [
        {
            name: 'Accent',
            light: '#A6FF00',
            dark: '#FFA200',
            cssVar: 'var(--color-accent)',
            description: 'Основной акцентный цвет'
        },
        {
            name: 'Gray',
            light: '#C2C2C2',
            dark: '#8B0D98',
            cssVar: 'var(--color-gray)',
            description: 'Нейтральные и вторичные цвета'
        },
        {
            name: 'Background',
            light: '#FFFFFF',
            dark: '#111111',
            cssVar: 'var(--color-background)',
            description: 'Фон приложения'
        },
        {
            name: 'Gradient',
            light: 'Accent Gradient',
            dark: 'Accent Gradient',
            cssVar: 'var(--gradient-accent)',
            description: 'Градиент на основе акцента'
        },
    ];

    return (
        <Section className="mb-12">
            <div className="text-center mb-6">
                <h2  className="text-2xl font-bold text-copy mb-2">Color System</h2>
                <p className="text-muted">
                    Интерактивная демонстрация цветовой палитры
                    <span className="mx-2">•</span>
                    Демо-тема:
                    <Button
                        variant='unstyled'
                        onClick={() => setIsDemoDark(!isDemoDark)}
                    // className="ml-2 px-3 py-1 bg-light-background-muted dark:bg-dark-background-muted rounded-full text-sm hover:scale-105 transition-transform"
                    >
                        {isDemoDark ? 'Тёмная 🌙' : 'Светлая ☀️'}
                    </Button>
                </p>
            </div>

            <Grid cols={2} md={4} gap="lg">
                {colorItems.map((item) => (
                    <GridItem key={item.name}>
                        <ColorCard
                            item={item}
                            isDemoDark={isDemoDark}
                            onToggleTheme={() => setIsDemoDark(!isDemoDark)}
                        />
                    </GridItem>
                ))}
            </Grid>

            <div className="mt-8 text-center text-sm text-muted">
                <p className="mb-2">✨ Интерактивные функции:</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-light-accent dark:bg-dark-accent" />
                        Клик - копирование CSS переменной
                    </span>
                    <span className="flex items-center gap-1">
                        📋 Ховер - кнопка копирования
                    </span>
                    <span className="flex items-center gap-1">
                        🌙/☀️ Переключение демо-темы
                    </span>
                </div>
            </div>
        </Section>
    );
};