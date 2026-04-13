import { Card, Grid, Section, Typography } from "@packages/shared/src";

export function HooksAndRerendersCards({ }) {
    return (
        <Section>
            <Typography variant="h2" children={"Hooks & ререндеры"} />
            <Grid cols={1} md={1} lg={2} gap="md" >
                <Card>
                    <Typography variant="h3">
                        Жизненный цикл компонента
                    </Typography>
                    <Typography variant="p">
                        <strong>Компонент — это функция</strong>, которая вызывается при каждом ререндере.

                        <br /><br /><strong>3 этапа жизненного цикла:</strong>
                        <br />1. <strong>Монтирование</strong> - компонент создаётся и добавляется в DOM
                        <br />2. <strong>Обновление</strong> - компонент перерисовывается при изменении state/props
                        <br />3. <strong>Размонтирование</strong> - компонент удаляется из DOM

                        <br /><br /><strong>Управление через useEffect:</strong>
                        <br />• Монтирование: <code>useEffect(() ={">"} {"{"}...{"}"}, [])</code>
                        <br />• Обновление: <code>useEffect(() ={">"} {"{"}...{"}"}, [deps])</code>
                        <br />• Размонтирование: <code>useEffect(() ={">"} {"{"} return () ={">"} cleanup{"}"} {"}"}, [])</code>

                        <br /><br />⚠️ <strong>StrictMode в dev-режиме</strong> вызывает эффекты дважды для поиска побочных эффектов.
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Зависимости в useEffect
                    </Typography>
                    <Typography variant="p">
                        <strong>Правило:</strong> Все переменные из области видимости компонента, используемые в хуке, должны быть в массиве зависимостей.

                        <br /><br /><strong>Почему ESLint ругается (exhaustive-deps):</strong>
                        <br />• <strong>Устаревшие значения (stale closure)</strong>
                        <br />• Изменение переменной → хук не обновится → старые значения
                        <br />• Может привести к багам

                        <br /><br /><strong>Пример проблемы:</strong>
                        <br /><code>const [count, setCount] = useState(0);</code>
                        <br /><code>useEffect(() ={">"} {"{"}</code>
                        <br /><code>&nbsp;&nbsp;console.log(count); // Будет всегда 0!</code>
                        <br /><code>{"}"}, []); // ❌ Нет [count]</code>

                        <br /><br /><strong>Исключения (когда можно игнорировать):</strong> значения со стабильной ссылкой:
                        <br />• Функции из setState из useState / dispatch из useReducer  - React гарантирует, что функции обновления состояния никогда не меняют ссылку между рендерами.
                        <br />• Значения, обёрнутые в useRef  - ref — это mutable контейнер, его изменения не участвуют в рендере.
                        <br />• Функции обёрнутые в useCallback  без зависимостей 
                        <br />useMemo
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        useRef vs useState
                    </Typography>
                    <Typography variant="p">
                        <strong>useRef:</strong>
                        <br />✅ Хранит значение между рендерами
                        <br />✅ Изменение <code>ref.current</code> не вызывает ререндер
                        <br />✅ Для: доступа к DOM, таймеров, флагов, предыдущих значений

                        <br /><br /><strong>useState:</strong>
                        <br />✅ Изменение всегда вызывает ререндер
                        <br />✅ Для данных, влияющих на UI

                        <br /><br /><strong>🎯 Ключевое правило:</strong>
                        <br />"Если изменение должно отразиться в UI → useState.
                        <br />Если нет → useRef."

                        <br /><br /><strong>Пример useRef:</strong>
                        <br /><code>const intervalRef = useRef(null);</code>
                        <br /><code>intervalRef.current = setInterval(...);</code>
                        <br /><code>// Меняем без ререндера</code>
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Batching обновлений (React 18+)
                    </Typography>
                    <Typography variant="p">
                        <strong>Что изменилось в React 18:</strong>
                        <br />• Раньше: группировка только в обработчиках событий (<code>onClick</code>, <code>onChange</code>)
                        <br />• Теперь: группировка работает везде (Promise, <code>setTimeout</code>, async/await)

                        <br /><br /><strong>Как работает:</strong>
                        <br />1. Множественные <code>setState</code> в одном тике
                        <br />2. React собирает все обновления
                        <br />3. Делает один ререндер

                        <br /><br /><strong>Преимущества:</strong>
                        <br />✅ Меньше ререндеров
                        <br />✅ Меньше работы для reconciliation
                        <br />✅ Более плавный UI

                        <br /><br /><strong>Пример:</strong>
                        <br /><code>const handleClick = () ={">"} {"{"}</code>
                        <br /><code>&nbsp;&nbsp;setA(1); // ⏳</code>
                        <br /><code>&nbsp;&nbsp;setB(2); // ⏳</code>
                        <br /><code>&nbsp;&nbsp;setC(3); // ⏳</code>
                        <br /><code>{"}"}; // → Один ререндер!</code>
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        StrictMode — двойные рендеры
                    </Typography>
                    <Typography variant="p">
                        <strong>Что происходит:</strong>
                        <br />В dev-режиме React дважды вызывает:
                        <br />• Функции компонентов
                        <br />• Эффекты (<code>useEffect</code>, <code>useLayoutEffect</code>)
                        <br />• Методы жизненного цикла

                        <br /><br /><strong>Зачем это нужно:</strong>
                        <br />🔍 <strong>Выявление побочных эффектов:</strong>
                        <br />• Мутация состояния
                        <br />• Отсутствие cleanup
                        <br />• Неправильные зависимости

                        <br /><br /><strong>Это нормально!</strong>
                        <br />• Только в dev-режиме
                        <br />• Не влияет на production
                        <br />• Помогает писать чистый код

                        <br /><br /><strong>Пример проблемы, которую находит:</strong>
                        <br /><code>useEffect(() ={">"} {"{"}</code>
                        <br /><code>&nbsp;&nbsp;user.count++; // ⚠️ Мутация!</code>
                        <br /><code>{"}"}, []);</code>
                        <br />// Второй вызов покажет неправильное значение
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Когда useCallback НЕ нужен
                    </Typography>
                    <Typography variant="p">
                        <strong>useCallback не ускоряет, а стабилизирует ссылку.</strong>

                        <br /><br /><strong>Когда НЕ использовать:</strong>
                        <br />• Компонент лёгкий, нет тяжелых вычислений
                        <br />• Нет реальных проблем с производительностью
                        <br />• Функция не передаётся в <code>React.memo</code> компонент
                        <br />• Функция не в зависимостях других хуков

                        <br /><br /><strong>Пример излишнего использования:</strong>
                        <br /><code>// ❌ Избыточно:</code>
                        <br /><code>const handleClick = useCallback(() ={">"} {"{"}</code>
                        <br /><code>&nbsp;&nbsp;console.log("click");</code>
                        <br /><code>{"}"}, []);</code>

                        <br /><code>// ✅ Проще и эффективнее:</code>
                        <br /><code>const handleClick = () ={">"} console.log("click");</code>

                        <br /><br /><strong>Когда использовать useCallback:</strong>
                        <br />• Передача в <code>React.memo</code> дочерние компоненты
                        <br />• Функция в зависимостях <code>useEffect</code>
                        <br />• Дорогие вычисления в зависимостях
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Почему useMemo — не оптимизация по умолчанию
                    </Typography>
                    <Typography variant="p">
                        <strong>useMemo добавляет накладные расходы:</strong>
                        <br />• Хранение предыдущего значения
                        <br />• Сравнение зависимостей при каждом рендере
                        <br />• Дополнительная память

                        <br /><br /><strong>Когда НЕ использовать:</strong>
                        <br />• Простые вычисления (сложение, конкатенация)
                        <br />• Редкие ререндеры
                        <br />• Небольшие массивы/объекты

                        <br /><br /><strong>Пример излишнего useMemo:</strong>
                        <br /><code>// ❌ Избыточно:</code>
                        <br /><code>const fullName = useMemo(() ={">"} {"{"}</code>
                        <br /><code>&nbsp;&nbsp;return firstName + " " + lastName;</code>
                        <br /><code>{"}"}, [firstName, lastName]);</code>

                        <br /><code>// ✅ Проще и быстрее:</code>
                        <br /><code>const fullName = firstName + " " + lastName;</code>

                        <br /><br /><strong>Когда использовать useMemo:</strong>
                        <br />• Тяжёлые вычисления (фильтрация больших массивов)
                        <br />• Создание сложных объектов/массивов
                        <br />• Референциальное равенство для зависимостей
                        <br /><br /><strong>Правило:</strong> Сначала измерьте производительность!
                    </Typography>
                </Card>
            </Grid>
        </Section>
    )
}


// 🔹 День 2 — Hooks & ререндеры (любимая тема техлидов)

// Цель: уверенно объяснять жизненный цикл.
// В React жизненный цикл функционального компонента состоит из монтирования, обновления и размонтирования.
// Компонент — это функция, которая вызывается при каждом ререндере.
// Побочные эффекты обрабатываются через useEffect: с пустым массивом — при монтировании, с зависимостями — при обновлениях, с cleanup — при размонтировании.
// useLayoutEffect используется для синхронной работы с DOM до отрисовки, а в StrictMode эффекты в dev-режиме могут вызываться дважды.


// Повторить

// зависимости в useEffect (почему eslint ругается)
// все переменные из области видимости компонента используемые в хуке должны быть указаны в зависимостях,
// иначе eslint  может отобразить ошибку exhaustive-deps, или замыкание. данная ошибка означает,
//  что при изминении какой-то из переменных используемых в хуке, но не указанной в зависимостях хука, внутри хука будет использоваться устаревшее значение.

// 🔹 useRef vs useState
// ✅ Очень хороший ответ
// 🧠 Эталонно для собеса:

// useRef

// хранит значение между рендерами
// изменение ref.current не вызывает ререндер
// используется для:
// доступа к DOM
// хранения mutable значений (таймеры, флаги, предыдущие значения)

// useState

// изменение состояния всегда вызывает ререндер
// используется для данных, влияющих на UI

// 🎯 Ключевая фраза:

// Если изменение значения должно отразиться в UI — это useState.
// Если нет — useRef.


// batching обновлений
// группировка событий это встроенная фича react 18( до этого она работала только в обработчиках событий OnClick, onСhange,
//  а в react 18 эта фича применяется ко всем обновлениям состояния не зависимо от источника ( события, промисы, таймеры, async/await))
// batching обновляет экран после того как все обработчики событий запущены и вызвали свои функции set
// помогает избежать лишних ререндеров
// уменьшает колличество работы для reconculations
// обеспечивает более плавный UI



// StrictMode — двойные рендеры
// двойные ререндеры это на самом деле повторный вызов функций и эффектов  в "строгом режиме" и это нормальное поведение. оно срабатывает только в режиме разработки.
//  React дважды вызывает функции и эффекты, чтобы  выявить нежелательные побочные эффекты и ошибки,
// такие как мутация состояния или отсутствие логики очистки

// Практика

// Ответь устно:

// когда useCallback не нужен
//  если:
// компонент  или дочерний компонент легкий, не сожержит тяжелых вычислений
//  несет реальной проблемы с производительностью.
// а так же если  react.memoне передается в компонент обернытй в react.memo или в зависимости других хуков
// не ускоряет а стабилизирует ссылку


// почему useMemo — не оптимизация по умолчанию
// useMemo добавляет накладные расходы на хранение значений и сравнение зависимостей. его стоит использовать только при реально дорогих вычислениях и частых ререндерах.