// src/components/common/List/List.tsx
import React, { ReactNode } from 'react';
import { Section, Typography } from '@packages/shared/src';

export interface ListProps<T> {
    title?: string;
    data: T[];
    renderItem: (item: T, index: number) => ReactNode;
    loading?: boolean;
    error?: string | null;
    query?: string;
    onSearch?: (value: string) => void;
    searchPlaceholder?: string;
    showSearch?: boolean;
    className?: string;
    emptyComponent?: ReactNode;
    loadingComponent?: ReactNode;
    errorComponent?: ReactNode;
}

export const List = <T,>({
    title,
    data,
    renderItem,
    loading = false,
    error = null,
    query,
    className = '',
    emptyComponent,
    loadingComponent,
    errorComponent,
}: ListProps<T>) => {

    const DefaultLoadingComponent = () => (
        <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
    );

    const DefaultErrorComponent = () => (
        <div className="text-red-600 text-center py-8">
            Ошибка: {error}
        </div>
    );

    const DefaultEmptyComponent = () => (
        <div className="text-gray-500 text-center py-8">
            {query ? 'Ничего не найдено' : 'Нет данных'}
        </div>
    );

    if (loading) {
        return loadingComponent || <DefaultLoadingComponent />;
    }

    if (error) {
        return errorComponent || <DefaultErrorComponent />;
    }

    return (
        <Section className={className}>
         
            {data.length === 0 ? (
                emptyComponent || <DefaultEmptyComponent />
            ) : (
                <ul className="flex gap-6 flex-col">
                    {data.map((item, index) => (
                        <li key={index}>{renderItem(item, index)}</li>
                    ))}
                </ul>
            )}
        </Section>
    );
};