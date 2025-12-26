import { useEffect, useRef, useState } from "react"

/**
 * useFetch — универсальный хук для получения данных с сервера.
 *
 * Особенности:
 * - Поддержка AbortController для отмены fetch при размонтировании.
 * - Обработка ошибок, включая AbortError.
 * - Можно передать функцию mapResponse для трансформации данных.
 * - Должен использоваться с useCallback для mapResponse, если она создается inline.
 *
 * Зависимости useEffect:
 * - url: если изменится, выполняется новый fetch.
 * - mapResponse: рекомендуется стабилизировать через useCallback.
 *
 * Пример использования:
 * ```ts
 * const mapUsers = useCallback(res => res.users, [])
 * const { data, loading, error } = useFetch('https://dummyjson.com/users', mapUsers)
 * ```
 *
 * @param url - URL для запроса
 * @param mapResponse - функция для трансформации полученных данных в массив T[]
 * @returns { data: T[], loading: boolean, error: string }
 */

type MapResponse<T> = (response: any) => T[]

export function useFetch<T>(
    url: string,
    mapResponse: MapResponse<T>
) {


    const [data, setData] = useState<T[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const controllerRef = useRef<AbortController | null>(null)

    useEffect(() => {
        setLoading(true)
        // теперь нам нужно содать новый контроллер
        const controller = new AbortController();

        // и положить его в ref
        controllerRef.current = controller;

        fetch(url, { signal: controller.signal })
            .then(response => {
                if (!response.ok) throw new Error("no response");
                return response.json()
            })
            .then(data => setData(mapResponse(data)))
            .catch(error => {
                if (error instanceof DOMException && error.name === "AbortError") return
                setError((error as Error).message)
            })
            .finally(() => setLoading(false))

        return () => {
            controllerRef.current.abort()
        }


        // 🔹 Зависимости useEffect
        // Любое значение или функция, используемые внутри эффекта,
        // должны быть в массиве зависимостей,
        // чтобы React правильно отслеживал их изменения и не использовал "устаревшие" значения.

        // 🔹 Когда можно не включать в зависимости
        // Если функция / параметр **константа**, не меняется и не зависит от props/state,
        // можно сознательно опустить их из зависимостей.

        // 🔹mapResponse и getUrl это Inline-функции 
        // Inline-функции создаются заново на каждом рендере.
        // Если они используются в useEffect зависимостях,
        // эффект будет запускаться каждый рендер → лишние fetch / баги HMR.
        // Решение: стабилизировать их через useCallback внутри компонента,
        // чтобы их identity оставалась неизменной между рендерами.

        //другими словами тут от mapResponse в зависимостях можно было бы отказаться, но мне важно запомнить факт того, что
        //  React “требует” зависимости не потому, что они меняются, а потому что они используются внутри эффекта 
    }, [url, mapResponse])

    return {
        data,
        error,
        loading
    }
}