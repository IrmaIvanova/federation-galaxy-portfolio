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
            <Section className="mb-12">

                <div>
                    <Typography>Grid System</Typography>
                    <Grid cols={1} md={2} lg={3} gap="md">
                        {/* <Grid cols={2} md={4} gap="md"> */}
                        {[1, 2, 3, 4].map(num => (
                            <GridItem key={num}>
                                <div className="bg-card p-4 rounded text-center">
                                    <span className="text-accent font-semibold">Item {num}</span>
                                </div>
                            </GridItem>
                        ))}
                    </Grid>
                </div>
            </Section>

            {/* Colors Demo */}
            <Section className="mb-12">
                <h2 className="text-2xl font-bold text-copy mb-6">Color System</h2>
                <Grid cols={2} md={4} gap="md">
                    <GridItem>
                        <div className="bg-light-accent dark:bg-dark-accent p-6 rounded-lg text-center">
                            <p className="font-semibold">Accent</p>
                            <p className="text-sm opacity-80">#A6FF00 / #FFA200</p>
                        </div>
                    </GridItem>
                    <GridItem>
                        <div className="bg-light-gray-400 dark:bg-dark-gray-400 p-6 rounded-lg text-center">
                            <p className="font-semibold">Gray</p>
                            <p className="text-sm opacity-80">#C2C2C2 / #8B0D98</p>
                        </div>
                    </GridItem>
                    <GridItem>
                        <div className="bg-light-background dark:bg-dark-background border border-light-gray-200 dark:border-dark-gray-700 p-6 rounded-lg text-center">
                            <p className="font-semibold">Background</p>
                            <p className="text-sm opacity-80">#FFFFFF / #111111</p>
                        </div>
                    </GridItem>
                    <GridItem>
                        <div className="bg-gradient-accent p-6 rounded-lg text-center">
                            <p className="font-semibold">Gradient</p>
                            <p className="text-sm opacity-80">Accent Gradient</p>
                        </div>
                    </GridItem>
                </Grid>
            </Section>


        </Container>
    );
};