import React from 'react';
import { cn } from '../../../utils/cn';

export interface TypographyProps {
    children: React.ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small';
    className?: string;

}


export const Typography: React.FC<TypographyProps> = ({
    children,
    className,
    variant,
    variant: Component = 'p',
}) => {


    const variantClasses = {
        h1: 'text-4xl font-bold text-copy mb-4',
        h2: 'text-3xl font-semibold text-copy mb-3',
        h3: 'text-2xl font-semibold text-copy mb-2',
        h4: 'text-xl font-semibold text-copy mb-2',
        p: 'text-base text-copy mb-3 leading-relaxed',
        small: 'text-sm text-muted',
        

    };

    return (
        <Component
            className={cn(
                variantClasses[variant],
                className
            )}
        >
            {children}
        </Component>
    );
};









// export const Lead: React.FC<TypographyProps> = ({ children, className }) => (
//     <p className={cn('text-lg text-muted mb-4 leading-relaxed', className)}>
//         {children}
//     </p>
// );



// export const Muted: React.FC<TypographyProps> = ({ children, className }) => (
//     <p className={cn('text-sm text-muted', className)}>
//         {children}
//     </p>
// );

// export const Blockquote: React.FC<TypographyProps> = ({ children, className }) => (
//     <blockquote className={cn(
//         'border-l-4 border-light-accent dark:border-dark-accent pl-4 py-2 my-4 italic text-copy',
//         className
//     )}>
//         {children}
//     </blockquote>
// );

// export const Code: React.FC<TypographyProps> = ({ children, className }) => (
//     <code className={cn(
//         'px-2 py-1 bg-light-background-muted dark:bg-dark-background-muted rounded text-sm font-mono text-copy border',
//         className
//     )}>
//         {children}
//     </code>
// );

// export const List: React.FC<TypographyProps & { ordered?: boolean }> = ({
//     children,
//     ordered = false,
//     className
// }) => {
//     const Component = ordered ? 'ol' : 'ul';
//     return (
//         <Component className={cn(
//             'my-4 space-y-2',
//             ordered ? 'list-decimal list-inside' : 'list-disc list-inside',
//             className
//         )}>
//             {children}
//         </Component>
//     );
// };

// export const ListItem: React.FC<TypographyProps> = ({ children, className }) => (
//     <li className={cn('text-copy', className)}>
//         {children}
//     </li>
// );