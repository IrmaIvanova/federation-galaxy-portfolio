import React from 'react';
import { cn } from '../../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'unstyled' | 'options';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  children,
  ...props
}) => {
  const baseClasses = 'btn';

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    unstyled: 'btn-unstyled',
    options: 'btn-opt'
   
  };
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  
  const disabledClasses = disabled ? 'dark:bg-dark-accent hover:none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none' : "";

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        className
      )}
       disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// interface ButtonProps{
    
// }

// export const Button = ({}) => {
//     return <button className="bg-green-300 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
//         Основная кнопка
//     </button>
// }