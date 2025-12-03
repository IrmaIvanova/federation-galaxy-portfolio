import React, { forwardRef } from 'react';
import { 
  Link as RouterLink, 
  LinkProps as RouterLinkProps,
  NavLink,
  NavLinkProps
} from 'react-router-dom';
import { cn } from '../../../utils/cn';

export type LinkVariant = 'default' | 'primary' | 'secondary' | 'muted';

export interface CustomLinkProps extends Omit<RouterLinkProps, 'to'> {
  /** URL для перехода */
  to: string;
  
  /** Текст или содержимое ссылки */
  children: React.ReactNode;
  
  /** Вариант стилизации */
  variant?: LinkVariant;
  
  /** Размер ссылки */
  size?: 'sm' | 'md' | 'lg';
  
  /** Показать подчеркивание */
  underline?: boolean;
  
  /** Дополнительные классы */
  className?: string;
  
  /** Открывать в новой вкладке */
  external?: boolean;
  
  /** Использовать NavLink (для активных состояний) */
  nav?: boolean;
}

export const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(({
  to,
  children,
  variant = 'default',
  size = 'md',
  underline = false,
  className,
  external = false,
  nav = false,
  ...props
}, ref) => {
  // Классы для вариантов (теперь без dark: префиксов - они в CSS)
  const variantClasses = {
    default: 'link-default',
    primary: 'link-primary',
    secondary: 'link-secondary',
    muted: 'link-muted',
  };

  const sizeClasses = {
    sm: 'link-sm',
    md: 'link-md',
    lg: 'link-lg',
  };

  const linkClasses = cn(
    'link', // базовый класс
    variantClasses[variant],
    sizeClasses[size],
    !underline && 'link-no-underline',
    className
  );

  // Для внешних ссылок
  if (external) {
    return (
      <a
        ref={ref}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Для NavLink (с активным состоянием)
  if (nav) {
    return (
      <NavLink
        ref={ref}
        to={to}
        className={({ isActive }) => 
          cn(
            linkClasses,
            isActive && 'link-active' // можно добавить класс для активного состояния
          )
        }
        {...props as NavLinkProps}
      >
        {children}
      </NavLink>
    );
  }

  // Для обычных внутренних ссылок
  return (
    <RouterLink
      ref={ref}
      to={to}
      className={linkClasses}
      {...props}
    >
      {children}
    </RouterLink>
  );
});

CustomLink.displayName = 'CustomLink';