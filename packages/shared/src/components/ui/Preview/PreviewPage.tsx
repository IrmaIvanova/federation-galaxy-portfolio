import React from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { Container } from "../../Layout/Container";
import { Section } from "../../Layout/Section";
import { Grid, GridItem } from "../../Layout/Grid";
import { useTheme } from "../../../providers/ThemeProvider";
import { ThemeToggle } from "../ThemeToogle/ThemeToogle";

import { TabsPreview } from '../Tabs/TabsPreview'
import { TypographyPreview } from "../Typography";
import { CustomLinkPreview } from "../CustomLink/PreviewCustomLink";
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
            <TabsPreview />

            <TypographyPreview />

            <CustomLinkPreview />


            {/* Buttons Section */}
            <Section className="mb-12">
                <h2 className="text-2xl font-bold text-copy mb-6">Buttons</h2>
                <Card padding="lg">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-copy mb-3">Variants</h3>
                            <div className="flex gap-3 flex-wrap">
                                <Button variant="primary">Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline">Outline</Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-copy mb-3">Sizes</h3>
                            <div className="flex gap-3 flex-wrap items-center">
                                <Button size="sm">Small</Button>
                                <Button size="md">Medium</Button>
                                <Button size="lg">Large</Button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-copy mb-3">States</h3>
                            <div className="flex gap-3 flex-wrap">
                                <Button disabled>Disabled</Button>
                                <Button variant="primary" disabled>Disabled Primary</Button>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </Card>
            </Section>

            {/* Cards Section */}
            <Section className="mb-12">
                <h2 className="text-2xl font-bold text-copy mb-6">Cards</h2>
                <Grid cols={1} md={2} lg={3} gap="lg">
                    <GridItem span={3}>
                        <Card padding="sm">
                            <h4 className="font-semibold text-copy mb-2">Small Padding</h4>
                            <p className="text-muted text-sm">Карточка с маленькими отступами</p>
                        </Card>
                    </GridItem>

                    <GridItem>
                        <Card padding="md">
                            <h4 className="font-semibold text-copy mb-2">Medium Padding</h4>
                            <p className="text-muted text-sm">Стандартная карточка с средними отступами</p>
                        </Card>
                    </GridItem>

                    <GridItem>
                        <Card padding="lg">
                            <h4 className="font-semibold text-copy mb-2">Large Padding</h4>
                            <p className="text-muted text-sm">Карточка с большими отступами для важного контента</p>
                        </Card>
                    </GridItem>
                </Grid>

            </Section>
            <Section className="mb-12">
                <h2 className="text-2xl font-bold text-copy mb-6">Cards</h2>
                <Grid cols={1} md={2} lg={3} gap="md" className="mb-8">
                    <Container>
                        <Card padding="sm">
                            <h4 className="font-semibold text-copy mb-2">Small Padding</h4>
                            <p className="text-muted text-sm">Карточка с маленькими отступами</p>
                        </Card>
                    </Container>

                    <Container>
                        <Card padding="md">
                            <h4 className="font-semibold text-copy mb-2">Medium Padding</h4>
                            <p className="text-muted text-sm">Стандартная карточка с средними отступами</p>
                        </Card>
                    </Container>

                    <Container>
                        <Card padding="lg">
                            <h4 className="font-semibold text-copy mb-2">Large Padding</h4>
                            <p className="text-muted text-sm">Карточка с большими отступами для важного контента</p>
                        </Card>
                    </Container>
                </Grid>
            </Section>

            {/* Layout Components */}
            <Section className="mb-12">
                <h2 className="text-2xl font-bold text-copy mb-6">Layout Components</h2>

                <div className="space-y-8">
                    {/* Section Backgrounds */}
                    <div>
                        <h3 className="text-lg font-semibold text-copy mb-4">Section Backgrounds</h3>
                        <Section background="primary" padding="md" className="rounded-lg mb-4">
                            <p className="text-accent text-center text-copy dark text-accent">Primary Background Section</p>
                        </Section>
                        <Section background="muted" padding="md" className="rounded-lg">
                            <p className="text-center text-copy">Muted Background Section</p>
                        </Section>
                    </div>

                    {/* Grid System */}
                    <div>
                        <h3 className="text-lg font-semibold text-copy mb-4">Grid System</h3>
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