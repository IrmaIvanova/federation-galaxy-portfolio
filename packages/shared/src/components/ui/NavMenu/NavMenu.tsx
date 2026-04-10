import { cn, Container, CustomLink, INavMenuItem, ThemeToggle, Typography } from '@packages/shared/src';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MenuIcon } from "../../Icons/NavMenuIcon";
import type { INavMenuProps, TNavMenuItem, IDeviderMenuItem, ILinkMenuItem } from "./NavMenu.interface"

export const NavMenu: React.FC<INavMenuProps> = ({
    options,
    themeBTN = false,
    className,
    variant = "horizontal"
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    // Закрываем меню при изменении маршрута
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [currentPath]);

    const horizontalClasses = {
        horizontal: "flex gap-6 justify-center items-center flex-wrap",
        vertical: `flex flex-col gap-6 flex-wrap`
    }

    const isLinkMenuItem = (item: TNavMenuItem): item is ILinkMenuItem => {
        return 'link' in item && item.link !== undefined;
    };

    const isDeviderMenuItem = (item: TNavMenuItem): item is IDeviderMenuItem => {
        return 'devider' in item && item.devider === true;
    };

    const renderItemType = (item: TNavMenuItem, isMobile: boolean = false) => {
        if (isDeviderMenuItem(item)) {
            const { deviderTitle } = item;

            return <Typography  variant="h3" children={deviderTitle} className='my-8' />

        }
        if (isLinkMenuItem(item)) {
            const { link, name, external } = item;
            return <CustomLink
                key={link}
                to={link}
                nav={!external && currentPath === link}
                variant="primary"
                size="lg"
                external={external}
                className={isMobile ? "block px-4 py-3 hover:bg-light-background-muted dark:hover:bg-dark-background-muted" : undefined}
            >
                {name}
            </CustomLink>
        }
        return null;
    }

    const getItemKey = (item: TNavMenuItem, index: number): string => {
        if (isLinkMenuItem(item)) return item.link;
        if (isDeviderMenuItem(item)) return `devider-${item.deviderTitle}`;
        return `unknown-${index}`;
    };
    // Desktop-меню 
    const DesktopMenu = (

        <div className="hidden md:flex  justify-between items-center gap-6">
            <div className={horizontalClasses[variant]}>
                {options.map((item, index) => <React.Fragment key={getItemKey(item, index)}>
                    {renderItemType(item)}
                </React.Fragment>)}
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
                    {options.map((item, index) => <React.Fragment key={getItemKey(item, index)}>
                        {renderItemType(item, true)}
                    </React.Fragment>)}

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
            <Container padding='none'>
                {DesktopMenu}
                {MobileMenu}
            </Container>
        </nav>
    );
};