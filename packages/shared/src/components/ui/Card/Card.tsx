import React from 'react';
import { cn } from '../../../utils/cn';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  id?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  padding = 'md',
  id
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div id={id} className={cn('card', paddingClasses[padding], className)}>
      {children}
    </div>
  );
};