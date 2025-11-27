import React from 'react';
import { cn } from '../../../utils/cn';

export interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  sm?: 1 | 2 | 3 | 4 | 5 | 6;
  md?: 1 | 2 | 3 | 4 | 5 | 6;
  lg?: 1 | 2 | 3 | 4 | 5 | 6;
  xl?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  as?: 'div' | 'section' | 'ul';
}

export const Grid: React.FC<GridProps> = ({
  children,
  className,
  cols = 1,
  sm,
  md,
  lg,
  xl,
  gap = 'md',
  as: Component = 'div',
}) => {
  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  };

  const gridClasses = cn(
    'grid',
    `grid-cols-${cols}`,
    sm && `sm:grid-cols-${sm}`,
    md && `md:grid-cols-${md}`,
    lg && `lg:grid-cols-${lg}`,
    xl && `xl:grid-cols-${xl}`,
    gapClasses[gap],
    className
  );

  return (
    <Component className={gridClasses}>
      {children}
    </Component>
  );
};