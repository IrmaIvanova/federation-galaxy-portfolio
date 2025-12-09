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
import { CustomLink } from "../CustomLink";
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

            <div id="contents" className="mb-12 rounded-lg flex flex-col">
                <Typography variant="h2" children="Оглавление" />
                <CustomLink to='#TabsSection' children="Tabs Section" />
                <CustomLink to='#TypographySection' children="Typography Section" />
                <CustomLink to='#CustomLinkSection' children="CustomLink Section" />
                <CustomLink to='#ButtonsSection' children="Buttons Section" />
                <CustomLink to='#CardsSection' children="CardsSection" />
                <CustomLink to='#SectionSystem' children="Section System" />
                <CustomLink to='#GridSystem' children="Grid System" />
                <CustomLink to='#ColorSystem' children="Color System" />
            </div>
            <CustomLink to='#contents' children="К оглавлению" className="fixed bottom-3 right-4 z-10 w-25 h-10" />

            {/* Tabs Section */}
            <div id="TabsSection" >
                <TabsPreview />

            </div>


            {/* Typography Section */}
            <div id="TypographySection" >
                <TypographyPreview />
            </div>

            {/* CustomLink Section */}
            <div id="CustomLinkSection" >
                <CustomLinkPreview />
            </div>

            {/* Buttons Section */}
            <div id="ButtonsSection" >
                <ButtonPreview />
            </div>

            {/* Cards Section */}
            <div id="CardsSection" >
                <CardPreview />
            </div>

            {/* Layout Components */}
            <Section className="mb-12">
                <Typography variant="h2">Layout Components</Typography>
            </Section>

            {/* Section System */}
            <div id="SectionSystem" >
                <SectionPreview />
            </div>


            {/* Grid System */}
            <div id="GridSystem" >
                <GridPreview />
            </div>

            {/* Colors Demo */}
            <div id="ColorSystem" >

                <ColorSystemDemo />
            </div>
        </Container>
    );
};
