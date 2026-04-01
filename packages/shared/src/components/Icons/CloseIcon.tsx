import React from 'react';

interface CloseIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  onClick?: () => void;
}

export const CloseIcon: React.FC<CloseIconProps> = ({
  className = '',
  width = 20,
  height = 20,
  color = 'currentColor',
  onClick,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};