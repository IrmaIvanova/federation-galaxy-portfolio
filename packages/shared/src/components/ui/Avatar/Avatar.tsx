import React from 'react';
import { cn } from '../../../utils/cn';

// Выносим типы для лучшей читаемости
type Size = 'none' | 'sm' | 'md' | 'lg';
type Rounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface AvatarProps {
  /** Содержимое (иконка, инициалы) — приоритетнее img */
  children?: React.ReactNode;
  /** URL изображения */
  src?: string;  // переименовал link → src (более семантично)
  /** Alt-текст для доступности */
  alt?: string;  // переименовал title → alt
  /** Размер аватара */
  size?: Size;
  /** Скругление углов */
  rounded?: Rounded;
  /** Кастомная ширина (переопределяет size) */
  width?: number;
  /** Кастомная высота (переопределяет size) */
  height?: number;
  /** Внутренний отступ (для children) */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Дополнительные классы */
  className?: string;
  /** ID элемента */
  id?: string;
}

// Константы выносим за компонент для производительности
const SIZE_CLASSES: Record<Size, string> = {
  none: '',
  sm: 'w-12 h-12',      // 48px
  md: 'w-16 h-16',      // 64px
  lg: 'w-24 h-24',      // 96px
};

const ROUNDED_CLASSES: Record<Rounded, string> = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full',
};

const PADDING_CLASSES: Record<NonNullable<AvatarProps['padding']>, string> = {
  none: '',
  sm: 'p-2',
  md: 'p-3',
  lg: 'p-4',
};

export const Avatar: React.FC<AvatarProps> = ({
  children,
  src,
  alt = '',
  size = 'sm',
  rounded = 'full',  // аватарки обычно круглые
  width,
  height,
  padding = 'md',
  className,
  id,
}) => {
  // Приоритет: кастомные width/height > size
  const hasCustomSize = width !== undefined || height !== undefined;
  
  const sizeClass = !hasCustomSize ? SIZE_CLASSES[size] : '';
  const roundedClass = ROUNDED_CLASSES[rounded];
  const paddingClass = children ? PADDING_CLASSES[padding] : '';

  // Стили для кастомных размеров
  const customStyle: React.CSSProperties = {};
  if (width !== undefined) customStyle.width = width;
  if (height !== undefined) customStyle.height = height;

  // Базовый контейнер с едиными стилями
  const containerClasses = cn(
    'relative inline-flex shrink-0 overflow-hidden',
    sizeClass,
    roundedClass,
    paddingClass,
    className
  );

  // Если передан children (иконка, инициалы), показываем его вместо img
  if (children) {
    return (
      <div
        id={id}
        className={containerClasses}
        style={customStyle}
        aria-label={alt || undefined}
      >
        <span className="flex h-full w-full items-center justify-center">
          {children}
        </span>
      </div>
    );
  }

  // Если нет src, показываем placeholder с инициалами из alt
  if (!src) {
    const initials = alt
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    return (
      <div
        id={id}
        className={cn(containerClasses, 'bg-muted flex items-center justify-center text-muted-foreground')}
        style={customStyle}
        aria-label={alt}
      >
        <span className="text-sm font-medium">{initials || '?'}</span>
      </div>
    );
  }

  // Обычный аватар с изображением
  return (
    <div id={id} className={containerClasses} style={customStyle}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

// Добавляем displayName для удобства отладки
Avatar.displayName = 'Avatar';