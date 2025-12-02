import { Button, cn, Container, Section, Typography } from '@packages/shared/src';
import React from 'react';


export interface HeroSectionProps {
    title: string;
    subtitle: string;
    description: string;
    primaryAction?: {
        label: string;
        onClick: () => void;
    };
    secondaryAction?: {
        label: string;
        onClick: () => void;
    };
    className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    subtitle,
    description,
    primaryAction,
    secondaryAction,
    className,
}) => {
    return (
        <Section className={cn(
            'py-20 md:py-32 relative overflow-hidden',
            'bg-gradient-to-br from-light-background via-light-background-muted to-light-accent-500',
            'dark:bg-gradient-to-br dark:from-dark-background dark:via-dark-background-muted dark:to-dark-accent-900',
            className
        )}>
            <Container size="lg">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Subtitle */}
                    <Typography className="text-lg text-muted mb-4 leading-relaxed">
                        {subtitle}
                    </Typography>

                    {/* Main Title */}
                    <Typography
                        variant="h1"
                        className="text-accent mb-6 text-copy"
                    >
                        {title}
                    </Typography>

                    {/* Description */}
                    <Typography  className="mb-10 text-muted text-lg">
                        {description}
                    </Typography>

                    {/* Actions */}
                    {(primaryAction || secondaryAction) && (
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            {primaryAction && (
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={primaryAction.onClick}
                                    className="px-8"
                                >
                                    {primaryAction.label}
                                </Button>
                            )}

                            {secondaryAction && (
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    onClick={secondaryAction.onClick}
                                >
                                    {secondaryAction.label}
                                </Button>
                            )}
                        </div>
                    )}
                </div>

                {/* Decorative elements */}
                {/* <div className="absolute top-10 right-10 w-32 h-32 bg-light-accent dark:bg-dark-accent rounded-full opacity-1 blur-3xl" />
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-light-accent dark:bg-dark-accent rounded-full opacity-1 blur-3xl" /> */}
            </Container>
        </Section>
    );
};