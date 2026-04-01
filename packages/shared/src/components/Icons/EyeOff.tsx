import React from 'react';
import { cn } from '../../utils/cn';

interface EyeIconProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: string;
  onClick?: () => void;
}

const SIZE_CLASSES = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

// EyeIcon (глаз открыт)
export const EyeIcon: React.FC<EyeIconProps> = ({
  className = '',
  size = 'md',
  color = 'currentColor',
  onClick,
}) => {
  return (
    <svg
      className={cn(SIZE_CLASSES[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <path
        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// EyeOffIcon (глаз закрыт)
export const EyeOffIcon: React.FC<EyeIconProps> = ({
  className = '',
  size = 'md',
  color = 'currentColor',
  onClick,
}) => {
  return (
    <svg
      className={cn(SIZE_CLASSES[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <path
        d="M2 2L22 22M9.88 9.88C9.328 10.19 8.965 10.826 8.965 11.5C8.965 12.604 9.861 13.5 10.965 13.5C11.639 13.5 12.275 13.137 12.585 12.585M17 12.5C17.28 12.2 17.5 11.9 17.5 11.5C17.5 9.29 15.71 7.5 13.5 7.5C12.8 7.5 12.2 7.7 11.7 8M21 12.5C20.2 14.4 18.6 16 16.5 17"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12.5C4.5 9 7 6 12 6C13.2 6 14.3 6.2 15.3 6.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};