import React from "react";
import { Button, ButtonPreview } from "../Button";
import { Card, CardPreview } from "../Card";
import { Container } from "../../Layout/Container";
import { Section } from "../../Layout/Section";
import { Grid, GridItem } from "../../Layout/Grid";
import { useTheme } from "../../../providers/ThemeProvider";
import { ThemeToggle } from "../ThemeToogle/ThemeToogle";

import { TabsPreview } from '../Tabs/TabsPreview'
import { Typography, TypographyPreview } from "../Typography";
import { CustomLinkPreview } from "../CustomLink/PreviewCustomLink";
import { SectionPreview } from "../../Layout/Section/SectionPreview";
import { GridPreview } from "../../Layout/Grid/GridPreview";
import { ColorSystemDemo } from "./index";
export const PreviewPage: React.FC = () => {
    const { theme } = useTheme();

    return (
        <Container size="xl" padding="lg">


            {/* Header */}
            <Section background="muted" className="rounded-lg mb-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-copy mb-2">Design System Preview</h1>
                    <p className="text-muted text-lg">UI Kit компоненты в действии</p>

                    {/* Theme Controls */}
                    <ThemeToggle />
                </div>
            </Section>

            {/* Current Theme Info */}
            <Section background="muted" className="rounded-lg">
                <div className="text-center">
                    <h3 className="text-lg font-semibold text-copy mb-2">Current Theme</h3>
                    <p className="text-muted">
                        Активная тема: <span className="text-accent font-semibold">{theme}</span>
                    </p>
                    <p className="text-sm text-muted mt-2">
                        Переключайте темы чтобы увидеть изменения цветовой палитры
                    </p>
                </div>
            </Section>
            {/* Tabs Section */}

            <TabsPreview />

            {/* Typography Section */}
            <TypographyPreview />

            {/* CustomLink Section */}
            <CustomLinkPreview />


            {/* Buttons Section */}
            <ButtonPreview />

            {/* Cards Section */}
            <CardPreview />

            {/* Layout Components */}
            <Section className="mb-12">
                <Typography variant="h2">Layout Components</Typography>
            </Section>

            {/* Section System */}

            <SectionPreview />



            {/* Grid System */}
            <GridPreview />

            {/* Colors Demo */}
            <ColorSystemDemo />

        </Container>
    );
};
