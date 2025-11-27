import React, { createContext, useEffect, useState, useCallback } from "react";
import { cn } from '../utils/cn';

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextType {
    theme: Theme;
    resolvedTheme: 'light' | 'dark';
    toggle: () => void;
    setTheme: (theme: Theme) => void;
    isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'system',
    resolvedTheme: 'light',
    toggle: () => { },
    setTheme: () => { },
    isDark: false,
});

export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
    enableSystem?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    defaultTheme = 'system',
    storageKey = 'ui-theme',
    enableSystem = true,
}) => {
    const [theme, setThemeState] = useState<Theme>(() => {
        if (typeof window === 'undefined') return defaultTheme;

        try {
            return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
        } catch {
            return defaultTheme;
        }
    });

    const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

    const resolveTheme = useCallback((theme: Theme): 'light' | 'dark' => {
        if (theme === 'system' && enableSystem) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return theme === 'dark' ? 'dark' : 'light';
    }, [enableSystem]);

    // Обновляем resolved theme при изменении theme или system preference
    useEffect(() => {
        const currentResolvedTheme = resolveTheme(theme);
        setResolvedTheme(currentResolvedTheme);

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = () => {
            if (theme === 'system') {
                const newResolvedTheme = resolveTheme('system');
                setResolvedTheme(newResolvedTheme);
                document.documentElement.classList.toggle('dark', newResolvedTheme === 'dark');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme, resolveTheme]);

    // Применяем тему к document
    useEffect(() => {
        const root = document.documentElement;

        root.classList.remove('light', 'dark');
        root.classList.add(resolvedTheme);

        // Сохраняем в data-attribute для использования в CSS
        root.setAttribute('data-theme', resolvedTheme);
    }, [resolvedTheme]);

    const setTheme = useCallback((newTheme: Theme) => {
        setThemeState(newTheme);

        try {
            localStorage.setItem(storageKey, newTheme);
        } catch (error) {
            console.warn('Failed to save theme to localStorage:', error);
        }
    }, [storageKey]);

    const toggle = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme, setTheme]);

    const value: ThemeContextType = {
        theme,
        resolvedTheme,
        toggle,
        setTheme,
        isDark: resolvedTheme === 'dark',
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

// Хук для использования темы
export const useTheme = (): ThemeContextType => {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};