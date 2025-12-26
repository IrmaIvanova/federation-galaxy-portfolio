import { useEffect, useState } from "react"


export function useDebounceQuery() {


    const [query, setQuery] = useState<string>('')
    const [debouncedQuery, setDebounceQuery] = useState<string>('')


    const normalizedQuery = query.toLowerCase()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceQuery(normalizedQuery)

        }, 300)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [query])



    return {
        debouncedQuery,
        query,
        setQuery

    }
}
