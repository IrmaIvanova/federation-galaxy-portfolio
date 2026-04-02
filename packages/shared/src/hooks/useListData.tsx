// src/hooks/useListData.ts
import { useCallback, useState } from 'react';
import { useFetch } from './useFetch';
import { useSearch } from './useSearch';

export interface UseListDataOptions<T> {
    fetchUrl: string;
    searchUrlBuilder: (query: string) => string;
    mapData: (response: any) => T[];
    debounceMs?: number;
}

export const useListData = <T,>({
    fetchUrl,
    searchUrlBuilder,
    mapData,
    debounceMs = 300,
}: UseListDataOptions<T>) => {
    const [query, setQuery] = useState('');

    // Все данные
    const {
        data: allData,
        error: fetchError,
        loading: fetchLoading,
    } = useFetch(fetchUrl, mapData);

    // Поиск
    const {
        data: searchResults,
        error: searchError,
        loading: searchLoading,
    } = useSearch(searchUrlBuilder, debounceMs, mapData);

    const handleSearch = useCallback((value: string) => {
        setQuery(value);
    }, []);

    const displayData = query ? (searchResults || []) : (allData || []);
    const isLoading = query ? searchLoading : fetchLoading;
    const error = query ? searchError : fetchError;

    return {
        query,
        data: displayData,
        loading: isLoading,
        error,
        handleSearch,
    };
};