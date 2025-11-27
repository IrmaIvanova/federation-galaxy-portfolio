import React from 'react';
import { cn } from '../../../../utils/cn';

export interface GridItemProps {
  children: React.ReactNode;
  className?: string;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 'full';
  as?: 'div' | 'li' | 'article';
}

export const GridItem: React.FC<GridItemProps> = ({
  children,
  className,
  span,
  sm,
  md,
  lg,
  xl,
  as: Component = 'div',
}) => {
  const itemClasses = cn(
    span && `col-span-${span}`,
    sm && `sm:col-span-${sm}`,
    md && `md:col-span-${md}`,
    lg && `lg:col-span-${lg}`,
    xl && `xl:col-span-${xl}`,
    className
  );

  return (
    <Component className={itemClasses}>
      {children}
    </Component>
  );
};