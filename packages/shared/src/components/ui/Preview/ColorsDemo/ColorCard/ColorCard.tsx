import { useState } from "react";
import { ColorItem } from "../ColorsDemo";
import { Button } from "../../../Button";
import { Card } from "../../../Card";
import { Typography } from "../../../Typography";

export const ColorCard: React.FC<{
    item: ColorItem;
    isDemoDark: boolean;
    onToggleTheme: () => void;
}> = ({ item, isDemoDark, onToggleTheme }) => {
    const [copied, setCopied] = useState(false);


    const handleCopy = async () => {
        await navigator.clipboard.writeText(item.cssVar);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const getBgClass = () => {
        switch (item.name) {
            case 'Accent':
                return isDemoDark
                    ? '!bg-dark-accent text-dark-copy'
                    : '!bg-light-accent text-light-copy';
            case 'Gray':
                return isDemoDark
                    ? '!bg-dark-gray-400 text-dark-copy'
                    : '!bg-light-gray-400 text-light-copy';
            case 'Background':
                return isDemoDark
                    ? '!bg-dark-background text-dark-copy border border-dark-gray-700'
                    : '!bg-light-background text-light-copy border border-light-gray-200';
            case 'Gradient':
                return isDemoDark
                    ? '!bg-gradient-accent-dark text-dark-copy'
                    : '!bg-gradient-accent-light text-light-copy';
            default:
                return '';
        }
    };

    const btnClassName = `absolute top-3  z-10 w-8 h-8`

    return (
        <div className="relative group">

            {/* Кнопка переключения темы */}
            <Button
                variant="options"
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleTheme();
                }}
                className={`${btnClassName} left-3 `}
                title="Переключить демо-тему"
            >
                {isDemoDark ? '🌙' : '☀️'}
            </Button>


            {/* Кнопка копирования */}
            <Button
                variant="options"
                onClick={handleCopy}
                className={` ${btnClassName} right-3
                    ${copied ? 'opacity-100 scale-110 bg-green-500' : 'opacity-0 group-hover:opacity-100'}
                    `}
                title={copied ? "Скопировано!" : `Копировать ${item.cssVar}`}
            >
                {copied ? '✓' : '📋'}
            </Button>


            {/* Основная карточка*/}
            <Card
                className={` ${getBgClass()}
          p-6 rounded-lg text-center cursor-pointer 
          transition-all duration-300
          hover:scale-[1.02] active:scale-[0.98]
          min-h-[140px] flex flex-col justify-center
        `}
            >
                <div onClick={handleCopy}>


                    {/* Badge состояния копирования */}
                    {copied && (
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full animate-pulse">
                            Скопировано!
                        </div>
                    )}

                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="h6">
                        {isDemoDark ? item.dark : item.light}
                    </Typography>
                    <Typography className="text-xs font-mono opacity-60 mb-3">
                        {item.cssVar}
                    </Typography>
                    <Typography className="text-xs opacity-50 border-t border-current/20 pt-2">
                        {item.description}
                    </Typography>
                </div>
            </Card>

            {/* Подсказка при наведении */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-muted whitespace-nowrap">
                Кликни для копирования
            </div>
        </div>
    );
};

