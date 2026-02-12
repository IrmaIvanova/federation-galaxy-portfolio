import { cn, Container, CustomLink, ThemeToggle } from '@packages/shared/src';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export interface INavMenuItem {
    link: string;
    name: string;
    external: boolean;
}

export interface NavMenuProps {
    options: INavMenuItem[];
    themeBTN?: boolean;
    className?: string;
}

// Иконка бургер-меню
const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div className="relative w-6 h-6 flex items-center justify-center">
        <div className={cn(
            "absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300",
            isOpen ? "rotate-45" : "-translate-y-1.5"
        )} />
        <div className={cn(
            "absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300",
            isOpen ? "opacity-0" : "opacity-100"
        )} />
        <div className={cn(
            "absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300",
            isOpen ? "-rotate-45" : "translate-y-1.5"
        )} />
    </div>
);

export const NavMenu: React.FC<NavMenuProps> = ({
    options,
    themeBTN = false,
    className
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    // Закрываем меню при изменении маршрута
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [currentPath]);

    // Desktop-меню (горизонтальное)
    const DesktopMenu = (

        <div className="hidden md:flex justify-between items-center gap-6">
            <div className='flex gap-6 justify-center items-center flex-wrap'>
                {options.map(({ link, name, external }) => (
                    <CustomLink
                        key={link}
                        to={link}
                        nav={!external && currentPath === link}
                        variant="primary"
                        size="md"
                        external={external}
                    >
                        {name}
                    </CustomLink>
                ))}
            </div>
            {themeBTN && <div className="ml-2"><ThemeToggle /></div>}
        </div>
    );

    // Mobile-меню (выпадающее)
    const MobileMenu = (
        <div className="md:hidden">
            {/* Кнопка бургер */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                    "p-2 rounded-lg transition-colors",
                    "hover:bg-light-background-muted dark:hover:bg-dark-background-muted",
                    isMobileMenuOpen && "bg-light-background-muted dark:bg-dark-background-muted"
                )}
                aria-label="Меню"
            >
                <MenuIcon isOpen={isMobileMenuOpen} />
            </button>

            {/* Выпадающее меню */}
            {isMobileMenuOpen && (
                <div className={cn(
                    "absolute top-full left-0 right-0 z-50 mt-2",
                    "bg-light-background dark:bg-dark-background",
                    "border border-light-gray-200 dark:border-dark-gray-700",
                    "rounded-lg shadow-lg overflow-hidden py-2"
                )}>
                    {options.map(({ link, name, external }) => (
                        <CustomLink
                            key={link}
                            to={link}
                            nav={!external && currentPath === link}
                            variant="primary"
                            size="lg"
                            external={external}
                            className="block px-4 py-3 hover:bg-light-background-muted dark:hover:bg-dark-background-muted"
                        >
                            {name}
                        </CustomLink>
                    ))}
                    {themeBTN && (
                        <div className="px-4 py-3 border-t border-light-gray-200 dark:border-dark-gray-700">
                            {themeBTN && <ThemeToggle />}
                        </div>
                    )}
                </div>
            )}
        </div>
    );

    return (

        <nav className={cn("relative", className)}>
            <Container size="lg" padding="sm">
                {DesktopMenu}
                {MobileMenu}
            </Container>
        </nav>
    );
};