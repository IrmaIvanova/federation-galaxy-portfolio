import React, { forwardRef } from 'react';
import { 
  Link as RouterLink, 
  LinkProps as RouterLinkProps,
  NavLink,
  NavLinkProps,
  useLocation
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
  
  /** Плавная прокрутка для якорей */
  smoothScroll?: boolean;
  
  /** Смещение при прокрутке к якорю (в пикселях) */
  scrollOffset?: number;
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
  smoothScroll = true,
  scrollOffset = 0,
  ...props
}, ref) => {
  const location = useLocation();
  
  // Проверяем является ли ссылка якорем (начинается с #)
  const isAnchor = typeof to === 'string' && to.startsWith('#');
  
  // Проверяем находимся ли мы уже на нужной странице для якоря
  const isSamePageAnchor = isAnchor && !to.includes('/');
  
  // Классы для вариантов
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
    !underline && !nav && 'link-no-underline',
    className
  );

  // Функция для плавной прокрутки к якорю
  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>, anchorId: string) => {
    if (!smoothScroll) return;
    
    e.preventDefault();
    const element = document.getElementById(anchorId);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - scrollOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Обновляем URL без перезагрузки страницы
      window.history.pushState(null, '', `#${anchorId}`);
    }
  };

  // 1. Якорь на текущей странице (обрабатываем через обычный <a> с smooth scroll)
  if (isSamePageAnchor) {
    const anchorId = to.substring(1); // убираем #
    
    return (
      <a
        ref={ref}
        href={to}
        className={linkClasses}
        onClick={(e) => scrollToAnchor(e, anchorId)}
        {...props}
      >
        {children}
      </a>
    );
  }

  // 2. Якорь на другой странице (React Router справится)
  if (isAnchor) {
    // Это якорь на другой странице, например "/about#team"
    if (nav) {
      return (
        <NavLink
          ref={ref}
          to={to}
          className={({ isActive }) => 
            cn(
              linkClasses,
              isActive && 'link-active'
            )
          }
          {...props as NavLinkProps}
        >
          {children}
        </NavLink>
      );
    }
    
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
  }

  // 3. Для внешних ссылок
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

  // 4. Для NavLink (с активным состоянием)
  if (nav) {
    console.log("to", to )
    return (
      <NavLink
        ref={ref}
        to={to}
        className={({ isActive }) =>{ 
          console.log("isActive", isActive)
          return cn(
            linkClasses,
            isActive && 'link-active underline'
          )}
        }
        {...props as NavLinkProps}
      >
        {children}
      </NavLink>
    );
  }

  // 5. Для обычных внутренних ссылок
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