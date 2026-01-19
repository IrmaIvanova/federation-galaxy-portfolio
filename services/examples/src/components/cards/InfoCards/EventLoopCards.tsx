

import { Card, Grid, Section, Typography } from "@packages/shared/src";

export function AsyncCard({ }) {
    return (
        <Section>
            <Typography variant="h2" children={"Aync + EventLoop"} />
            <Grid cols={1} md={2} lg={3} gap="md" >

                <Card>
                    <Typography variant="h3">
                        Async / Await + Event Loop (базовый уровень)
                    </Typography>
                    <Typography variant="p">
                        <strong>Event Loop</strong> — это механизм, который позволяет JavaScript выполнять асинхронный код,
                        несмотря на то, что он однопоточный.
                        <br /><br />
                        <strong>Как работает:</strong>
                        <br />1. Синхронный код выполняется сразу
                        <br />2. Асинхронные операции (setTimeout, fetch, promises) отправляются в Web APIs
                        <br />3. Когда асинхронная операция завершается, её callback попадает в Callback Queue
                        <br />4. Event Loop проверяет, пуст ли Call Stack, и если да — перемещает callback из Queue в Stack
                        <br /><br />
                        <strong>Async/Await</strong> — это синтаксический сахар над Promise, который делает асинхронный код похожим на синхронный.
                        <br /><br />
                        <strong>Пример:</strong>
                        <br /><code>async function fetchData() {"{"}</code>
                        <br /><code>&nbsp;&nbsp;try {"{"}</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;const response = await fetch('/api/data'); // "Приостанавливает" выполнение</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;const data = await response.json();</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;return data;</code>
                        <br /><code>&nbsp;&nbsp;{"}"} catch (error) {"{"}</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;console.error(error);</code>
                        <br /><code>&nbsp;&nbsp;{"}"}</code>
                        <br /><code>{"}"}</code>
                    </Typography>
                </Card>
                <Card>
                    <Typography variant="h3">
                        Event Loop в JavaScript: фундаментальное знание
                    </Typography>
                    <Typography variant="p">
                        <strong>Event Loop (цикл событий)</strong> — это механизм, который позволяет JavaScript,
                        будучи однопоточным языком, выполнять асинхронные операции, обрабатывать события и работать
                        с I/O операциями без блокировки основного потока.

                        <br /><br /><strong>Ключевые компоненты:</strong>

                        <br /><strong>1. Call Stack (стек вызовов):</strong>
                        <br />• Хранит вызовы функций в порядке их выполнения (LIFO — Last In, First Out)
                        <br />• Каждый вызов функции создаёт новый frame в стеке
                        <br />• Когда функция завершается — её frame удаляется из стека

                        <br /><br /><strong>2. Web APIs (браузерные API):</strong>
                        <br />• Обеспечиваются средой выполнения (браузером или Node.js)
                        <br />• <code>setTimeout</code>, <code>setInterval</code>, DOM события, <code>fetch</code>, <code>XMLHttpRequest</code>
                        <br />• Когда вызывается асинхронная операция — она передаётся в Web API

                        <br /><br /><strong>3. Callback Queue (очередь коллбэков) / Task Queue:</strong>
                        <br />• Хранит коллбэки, готовые к выполнению
                        <br />• FIFO (First In, First Out) — первый пришёл, первый ушёл
                        <br />• Содержит макрозадачи (macro tasks)

                        <br /><br /><strong>4. Microtask Queue (очередь микрозадач):</strong>
                        <br />• Приоритетнее Callback Queue
                        <br />• Содержит микрозадачи: <code>Promise.then/catch/finally</code>, <code>queueMicrotask()</code>, <code>MutationObserver</code>
                        <br />• Выполняется ПОЛНОСТЬЮ перед следующим рендером и макрозадачами

                        <br /><br /><strong>5. Event Loop (сам цикл событий):</strong>
                        <br />• Бесконечный цикл, который постоянно проверяет:
                        <br />&nbsp;&nbsp;1. Пуст ли Call Stack?
                        <br />&nbsp;&nbsp;2. Есть ли задачи в Microtask Queue? → выполнить ВСЕ
                        <br />&nbsp;&nbsp;3. Есть ли задачи в Callback Queue? → выполнить одну
                        <br />&nbsp;&nbsp;4. Проверить, нужно ли выполнить render (в браузере)

                        <br /><br /><strong>Пример работы:</strong>
                        <br /><code>console.log('1'); // Синхронно → Call Stack</code>
                        <br /><code>setTimeout(() ={">"} console.log('2'), 0); // → Web API → Callback Queue</code>
                        <br /><code>Promise.resolve().then(() ={">"} console.log('3')); // → Microtask Queue</code>
                        <br /><code>console.log('4'); // Синхронно → Call Stack</code>

                        <br /><br /><strong>Результат:</strong> <code>1 → 4 → 3 → 2</code>

                        <br /><br /><strong>Объяснение:</strong>
                        <br />1. <code>console.log('1')</code> выполняется сразу
                        <br />2. <code>setTimeout</code> уходит в Web API, затем в Callback Queue
                        <br />3. <code>Promise.then</code> уходит в Microtask Queue
                        <br />4. <code>console.log('4')</code> выполняется сразу
                        <br />5. Call Stack пуст → Event Loop проверяет Microtask Queue
                        <br />6. Выполняется <code>console.log('3')</code> из микрозадачи
                        <br />7. Microtask Queue пуста → Event Loop проверяет Callback Queue
                        <br />8. Выполняется <code>console.log('2')</code> из макрозадачи

                        <br /><br /><strong>Типы задач:</strong>

                        <br /><strong>Макрозадачи (macrotasks):</strong>
                        <br />• <code>setTimeout</code>, <code>setInterval</code>, <code>setImmediate</code> (Node.js)
                        <br />• I/O операции
                        <br />• UI rendering
                        <br />• События (click, load, etc.)

                        <br /><br /><strong>Микрозадачи (microtasks):</strong>
                        <br />• <code>Promise</code> callbacks (<code>.then</code>, <code>.catch</code>, <code>.finally</code>)
                        <br />• <code>queueMicrotask()</code>
                        <br />• <code>MutationObserver</code>
                        <br />• <code>process.nextTick</code> (Node.js)

                        <br /><br /><strong>Порядок выполнения:</strong>
                        <br />1. Синхронный код (Call Stack)
                        <br />2. ВСЕ микрозадачи (Microtask Queue) ← полностью очищается!
                        <br />3. Render (если нужно) в браузере
                        <br />4. Одна макрозадача (Callback Queue)
                        <br />5. Вернуться к шагу 2

                        <br /><br /><strong>Практическое значение для React:</strong>
                        <br />• <code>setState</code> обновления могут быть батчированы (React 17+ использует микрозадачи)
                        <br />• <code>useEffect</code> выполняется после рендера (в макрозадаче)
                        <br />• Анимации: <code>requestAnimationFrame</code> выполняется между рендерами
                        <br />• <code>Promise</code> в <code>useEffect</code> обрабатываются как микрозадачи

                        <br /><br /><strong>Ключевой вывод:</strong>
                        <br />Event Loop — это то, что делает JavaScript асинхронным при однопоточности.
                        <br />Понимание его работы критично для:
                        <br />• Отладки асинхронного кода
                        <br />• Оптимизации производительности
                        <br />• Предотвращения блокировки UI
                        <br />• Правильного использования Promise и async/await
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Event Loop: Визуализация и практика
                    </Typography>
                    <Typography variant="p">
                        <strong>Визуальное представление Event Loop:</strong>
                        <br />
                        <code>┌───────────────────────────┐</code>
                        <br /><code>│        Call Stack        │ ← Текущие выполняемые функции</code>
                        <br /><code>└────────────┬────────────┘</code>
                        <br /><code>             │</code>
                        <br /><code>             ▼</code>
                        <br /><code>┌───────────────────────────┐</code>
                        <br /><code>│         Web APIs          │ ← setTimeout, fetch, DOM events</code>
                        <br /><code>└────────────┬────────────┘</code>
                        <br /><code>             │</code>
                        <br /><code>             ▼</code>
                        <br /><code>┌───────────────────────────┐</code>
                        <br /><code>│     Microtask Queue       │ ← Promise, queueMicrotask</code>
                        <br /><code>└────────────┬────────────┘</code>
                        <br /><code>             │ (приоритет)</code>
                        <br /><code>             ▼</code>
                        <br /><code>┌───────────────────────────┐</code>
                        <br /><code>│     Callback Queue        │ ← setTimeout callback, events</code>
                        <br /><code>└────────────┬────────────┘</code>
                        <br /><code>             │</code>
                        <br /><code>             ▼</code>
                        <br /><code>┌───────────────────────────┐</code>
                        <br /><code>│        Event Loop         │ ← Контроллер: "Стек пуст? → Задачи?"</code>
                        <br /><code>└───────────────────────────┘</code>

                        <br /><br /><strong>Сложный пример для понимания:</strong>
                        <br /><code>console.log('script start');</code>
                        <br /><code>setTimeout(() ={">"} console.log('timeout'), 0);</code>
                        <br /><code>Promise.resolve()</code>
                        <br /><code>&nbsp;&nbsp;.then(() ={">"} console.log('promise1'))</code>
                        <br /><code>&nbsp;&nbsp;.then(() ={">"} console.log('promise2'));</code>
                        <br /><code>console.log('script end');</code>

                        <br /><br /><strong>Результат:</strong>
                        <br /><code>script start → script end → promise1 → promise2 → timeout</code>

                        <br /><br /><strong>Шаги выполнения:</strong>
                        <br />1. <code>console.log('script start')</code> → Call Stack
                        <br />2. <code>setTimeout</code> → Web API (0ms) → Callback Queue
                        <br />3. <code>Promise.then</code> → Microtask Queue
                        <br />4. <code>console.log('script end')</code> → Call Stack
                        <br />5. Call Stack пуст → Event Loop проверяет Microtask Queue
                        <br />6. Первый <code>.then</code> → Call Stack → <code>console.log('promise1')</code>
                        <br />7. Второй <code>.then</code> добавляется в Microtask Queue (цепочка Promise)
                        <br />8. Event Loop снова проверяет Microtask Queue (она не пуста!)
                        <br />9. Второй <code>.then</code> → Call Stack → <code>console.log('promise2')</code>
                        <br />10. Microtask Queue пуста → Event Loop проверяет Callback Queue
                        <br />11. <code>setTimeout</code> callback → Call Stack → <code>console.log('timeout')</code>

                        <br /><br /><strong>Важные особенности:</strong>

                        <br /><strong>1. Блокировка Event Loop:</strong>
                        <br /><code>while (true) {"{"} {"}"} // Заблокирует ВСЁ</code>
                        <br /><code>// Никакие события, таймеры или промисы не выполнятся!</code>

                        <br /><br /><strong>2. Starvation (голодание):</strong>
                        <br /><code>function starve() {"{"}</code>
                        <br /><code>&nbsp;&nbsp;Promise.resolve().then(starve); // Бесконечная микрозадача</code>
                        <br /><code>{"}"}</code>
                        <br /><code>starve();</code>
                        <br /><code>setTimeout(() ={">"} console.log('never'), 0); // Никогда не выполнится!</code>

                        <br /><br /><strong>3. Правильный асинхронный код:</strong>
                        <br /><code>// ❌ Плохо: блокирует Event Loop</code>
                        <br /><code>const processData = (data) ={">"} {"{"}</code>
                        <br /><code>&nbsp;&nbsp;for (let i = 0; i {"<"} 1e7; i++) {"{"} тяжелые вычисления {"}"}</code>
                        <br /><code>{"}"};</code>

                        <br /><br /><code>// ✅ Хорошо: разбивает на части</code>
                        <br /><code>const processAsync = async (data) ={">"} {"{"}</code>
                        <br /><code>&nbsp;&nbsp;for (let i = 0; i {"<"} data.length; i += chunkSize) {"{"}</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;await new Promise(resolve ={">"} setTimeout(resolve, 0));</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;// Даём Event Loop "дышать"</code>
                        <br /><code>&nbsp;&nbsp;{"}"}</code>
                        <br /><code>{"}"};</code>

                        <br /><br /><strong>Для собеседования:</strong>
                        <br />• Event Loop позволяет JS быть асинхронным при однопоточности
                        <br />• Микрозадачи выполняются перед макрозадачами
                        <br />• <code>Promise</code> → микрозадачи, <code>setTimeout</code> → макрозадачи
                        <br />• Call Stack должен быть пуст для выполнения задач из очередей
                        <br />• Понимание Event Loop критично для оптимизации и отладки
                    </Typography>
                </Card>
            </Grid>
        </Section>
    )
}
