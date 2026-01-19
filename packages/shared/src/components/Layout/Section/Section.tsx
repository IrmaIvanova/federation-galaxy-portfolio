import React from 'react';
import { cn } from '../../../utils/cn';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'muted' | 'primary' | 'secondary' | 'transparent';
  as?: 'section' | 'div' | 'article';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  padding = 'md',
  background = 'transparent',
  as: Component = 'section',
}) => {
  const paddingClasses = {
    none: '',
    sm: 'py-6',
    md: 'py-10',
    lg: 'py-16',
    xl: 'py-20',
  };

  const backgroundClasses = {
    transparent: 'bg-transparent',
    default: 'bg-light-background dark:bg-dark-background',
    muted: 'bg-light-background-muted dark:bg-dark-background-muted',
    primary: 'bg-light-accent-50 dark:bg-dark-accent-50',
    secondary: 'bg-light-gray-50 dark:bg-dark-gray-50',
  };

  return (
    <Component
      className={cn(
        " mx-auto w-full max-w-[1440px] ",
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >

      {children}

    </Component>
  );
};