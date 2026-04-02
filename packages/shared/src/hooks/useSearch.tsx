import { useEffect, useRef, useState } from "react";
/**
 * useSearch — хук для поиска с debounce, кешированием и отменой fetch.
 *
 * Особенности:
 * - Debounce запросов, чтобы не перегружать сервер.
 * - Кеширование результатов в Map, чтобы повторно не делать fetch.
 * - Поддержка AbortController для отмены предыдущих запросов.
 * - mapResponse: функция для трансформации данных.
 *
 * Важно про зависимости useEffect:
 * - query: триггер запроса.
 * - getUrl: желательно стабилизировать через useCallback.
 * - mapResponse: желательно стабилизировать через useCallback.
 * - debounceMs: если меняется, эффект пересоздается.
 *
 * Пример использования:
 * ```ts
 * const getUserSearchUrl = useCallback(q => `${usersUrl}/search?q=${q}`, [usersUrl])
 * const mapUsers = useCallback(res => res.users, [])
 * const { query, setQuery, data } = useSearch(getUserSearchUrl, 300, mapUsers)
 * ```
 *
 * @param getUrl - функция, возвращающая URL по query
 * @param debounceMs - задержка дебаунса в мс (по умолчанию 300)
 * @param mapResponse - функция для трансформации ответа в массив T[]
 * @returns { data: T[], loading: boolean, error: string, query: string, setQuery: function }
 */

type GetUrlFn = (query: string) => string
type mapResponse<T> = (respons: any) => T[]


export function useSearch<T>(
    getUrl: GetUrlFn,
    debounceMs = 300,
    mapResponse: mapResponse<T>
) {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [query, setQuery] = useState<string>('')
    const [data, setData] = useState<T[]>([])

    // выносим аборт контроллер в юз реф так как это мутабельный объект и он не должен вызывать лишних перерендеров
    const controllerRef = useRef<AbortController | null>(null)


    const cacheRef = useRef<Map<string, T[]>>(new Map())

    //  напишем useEffec который будет реагировать на изменения query и вызывать новый запрос при изменения поля ввода

    useEffect(() => {
        // очищаем стейты при отсутсвии query
        if (!query) {
            setData([])
            setLoading(false)
            setError(null)
            return;
        }



        // пишем кастомный debounce, с небольшой задержкой,чтобы не перезагружать сервер запросами пока пользователь вводит запрос 
        const debounce = setTimeout(() => {
            // возвращаем из кеша, если есть
            if (cacheRef.current.has(query)) {
                setData(cacheRef.current.get(query)!);
                return
            }
            // мы удаляем старый контроллера  если в ref что-то было
            controllerRef.current?.abort()
            // запускаем отображение компонента загрузки
            setLoading(true)
            // и убираем ошибки если они были при прошло запросе
            setError(null)

            // теперь нам нужно содать новый контроллер
            const controller = new AbortController();
            // и положить его в ref
            controllerRef.current = controller;


            // обработка запроса
            fetch(getUrl(query), { signal: controller.signal })
                .then(res => {
                    if (!res.ok) throw new Error('fetch faild')
                    return res.json() as Promise<T[]>
                })
                .then(data => {
                    const mapped = mapResponse(data)

                    setData(mapped)
                    // записываем в кеш
                    cacheRef.current.set(query, mapped)
                })
                .catch(error => {

                    if (error instanceof DOMException && error.name === "AbortError") return
                    setError((error as Error).message)
                })
                .finally(() => {
                    setLoading(false)
                })




        }, debounceMs)





        // сразу добавляем cleanUp, чтобы очищать таймер при размонтировании компонента, и обеспечить очистку памяти
        return () => {
            clearTimeout(debounce);
            // абортируем запрос чтобы избежать ошибки Can't perform a React state update on an unmounted component.(не можем воспроизвести обновление state на размотированном компоненте)
            controllerRef.current?.abort()
        }

        // 🔹 Зависимости useEffect
        // Любое значение или функция, используемые внутри эффекта,
        // должны быть в массиве зависимостей,
        // чтобы React правильно отслеживал их изменения и не использовал "устаревшие" значения.

        // 🔹 Когда можно не включать в зависимости
        // Если функция / параметр **константа**, не меняется и не зависит от props/state,
        // можно сознательно опустить их из зависимостей.

        //другими словами тут от getUrl, debounceMs, mapResponse в зависимостях можно было бы отказаться, но мне важно запомнить факт того, что
        //  React “требует” зависимости не потому, что они меняются, а потому что они используются внутри эффекта

        // 🔹mapResponse и getUrl это Inline-функции 
        // Inline-функции создаются заново на каждом рендере.
        // Если они используются в useEffect зависимостях,
        // эффект будет запускаться каждый рендер → лишние fetch / баги HMR.
        // Решение: стабилизировать их через useCallback внутри компонента,
        // чтобы их identity оставалась неизменной между рендерами.
    }, [query, getUrl, debounceMs, mapResponse])

    return {

        data,
        loading,
        error,
        query,
        setQuery,
    }

}