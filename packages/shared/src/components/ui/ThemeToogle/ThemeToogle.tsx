import React from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import { Button } from '../Button';
import { cn } from '../../../utils/cn';

export const ThemeToggle: React.FC = () => {
    const { theme, toggle } = useTheme();

    return (
        <Button
            variant="outline"
            onClick={toggle}
            
            className={cn(
                "relative transition-all duration-300",
                theme === 'dark' ? 'bg-dark-accent text-dark-copy' : 'bg-light-accent text-light-copy'
            )}
        >
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </Button>
    );
};