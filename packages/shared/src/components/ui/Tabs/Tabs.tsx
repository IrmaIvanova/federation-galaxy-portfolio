import React, { createContext, useContext, useState } from 'react';
import { cn } from '../../../utils/cn';
import { TabsTrigger } from './TabsTrigger/TabsTrigger';
import { TabsContent } from './TabsContent/TabsContent';

interface TabsContextType {
    selectedTab: string;
    setSelectedTab: (tab: string) => void;
}

export const TabsContext = createContext<TabsContextType | undefined>(undefined);

export interface TabsOptionProps {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface TabsContentOptionProps {
    value: string;
    children: React.ReactNode | string;
}

export interface TabsProps {
    defaultValue: string;
    options?: TabsOptionProps[];
    contentOptions?: TabsContentOptionProps[];
    children?: React.ReactNode;
    className?: string;
    onValueChange?: (value: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
    defaultValue,
    options,
    contentOptions,
    children,
    className,
    onValueChange,
}) => {
    const [selectedTab, setSelectedTab] = useState(defaultValue);

    const handleTabChange = (value: string) => {
        setSelectedTab(value);
        onValueChange?.(value);
    };

    return (
        <TabsContext.Provider value={{ selectedTab, setSelectedTab: handleTabChange }}>
            <div className={cn('w-full', className)}>
                {options && (
                    <TabsList>
                        {options.map((option) => (
                            <TabsTrigger
                                key={option.value}
                                value={option.value}
                                disabled={option.disabled}
                            >
                                {option.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                )}
                {contentOptions && (
                    <TabsList>
                        {contentOptions.map((contentOption) => (
                            <TabsContent
                                key={contentOption.value}
                                value={contentOption.value}
                            >
                                {contentOption.children}
                            </TabsContent>
                        ))}
                    </TabsList>
                )}
                {children}
            </div>
        </TabsContext.Provider>
    );
};


export interface TabsListProps {
    children: React.ReactNode;
    className?: string;
}

export const TabsList: React.FC<TabsListProps> = ({
    children,
    className,
}) => {
    return (
        <div>
            {children}
        </div>
    );
};