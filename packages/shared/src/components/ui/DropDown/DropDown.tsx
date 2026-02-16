import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../../utils/cn';
import { Button } from '../Button';

export interface IDropdownItem {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  variant?: 'default' | 'danger';
}

export interface IDropdownProps {
  /** Элементы выпадающего меню */
  items: IDropdownItem[];
  /** Позиция меню */
  align?: 'left' | 'right';
  /** Размер иконки */
  size?: 'sm' | 'md' | 'lg';
  /** вариант иконки */
  variant?: 'options' | 'unstyled';
  /** Кастомная иконка */
  icon?: React.ReactNode;
  /** Дополнительные классы */
  className?: string;
  /** Открыто по умолчанию */
  defaultOpen?: boolean;
  /** Колбэк при открытии/закрытии */
  onOpenChange?: (open: boolean) => void;
}

export const Dropdown: React.FC<IDropdownProps> = ({
  items,
  variant = "unstyled",
  align = 'right',
  size = 'md',
  icon,
  className,
  defaultOpen = false,
  onOpenChange,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Иконка по умолчанию (три точки)
  const defaultIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-current"
    >
      <circle cx="12" cy="6" r="2" fill="currentColor" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="18" r="2" fill="currentColor" />
    </svg>
  );

  // Размеры иконки
  const sizeClasses = {
    sm: 'w-8 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  // Закрытие при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        onOpenChange?.(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onOpenChange]);

  const toggleDropdown = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onOpenChange?.(newState);
  };

  return (
    <div ref={dropdownRef} className={cn('relative inline-block', className)}>
      {/* Кнопка с иконкой */}
      <Button
        onClick={toggleDropdown}
        size="optBtn"
        variant={variant}
        className={cn(
          'flex items-center justify-center rounded-lg',
          'transition-all duration-200',
          'hover:bg-light-background-muted dark:hover:bg-dark-background-muted',
          'focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent',
          sizeClasses[size],
          isOpen && 'bg-light-background-muted dark:bg-dark-background-muted'
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {icon || defaultIcon}
      </Button>


      {/* Выпадающее меню */}
      {isOpen && (
        <div
          className={cn(
            'absolute z-50 mt-2 min-w-[180px]',
            'bg-light-background dark:bg-dark-background',
            'border border-light-gray-200 dark:border-dark-gray-700',
            'rounded-lg shadow-lg overflow-hidden',
            'py-1',
            align === 'right' ? 'right-0' : 'left-0'
          )}
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                if (!item.disabled) {
                  item.onClick?.();
                  setIsOpen(false);
                  onOpenChange?.(false);
                }
              }}
              disabled={item.disabled}
              className={cn(
                'w-full px-4 py-2 text-left',
                'flex items-center gap-3',
                'transition-colors duration-150',
                'text-sm',
                item.disabled && 'opacity-50 cursor-not-allowed',
                !item.disabled && [
                  'hover:bg-light-background-muted dark:hover:bg-dark-background-muted',
                  item.variant === 'danger'
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-light-copy dark:text-dark-copy'
                ]
              )}
            >
              {item.icon && (
                <span className="w-4 h-4 flex-shrink-0">
                  {item.icon}
                </span>
              )}
              <span className="flex-1">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
