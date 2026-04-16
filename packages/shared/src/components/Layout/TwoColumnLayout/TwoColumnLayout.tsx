// TwoColumnLayout.tsx
import React from 'react';
import { cn } from '../../../utils/cn';

export interface TwoColumnLayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
  sidebarWidth?: '1/4' | '1/3' | '1/2' | 'auto';
  gap?: 'sm' | 'md' | 'lg';
  sidebarClassName?: string;    // ← для кастомных стилей сайдбара
  contentClassName?: string;    // ← для кастомных стилей контента
  className?: string;
}
// TwoColumnLayout.tsx
export const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  sidebar,
  content,
  sidebarWidth = '1/4',
  gap = 'md',
  sidebarClassName,
  contentClassName,
  className,
}) => {
  const widthClasses = {
    '1/4': 'md:w-1/4',
    '1/3': 'md:w-1/3',
    '1/2': 'md:w-1/2',
    'auto': 'md:w-auto',
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  return (
    <div className={cn(
      "flex flex-col md:flex-row",
      gapClasses[gap],
      className
    )}>
      <div className={cn(
        widthClasses[sidebarWidth],
        "w-full md:sticky md:top-0 md:self-start", 
        sidebarClassName
      )}>
        {sidebar}
      </div>
      
      <div className={cn(
        "flex-1 min-w-0", 
        contentClassName
      )}>
        {content}
      </div>
    </div>
  );
};