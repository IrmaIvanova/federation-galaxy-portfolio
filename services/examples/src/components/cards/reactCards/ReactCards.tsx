import { Container, Section, Card, Typography, Grid, CodeBlock } from "@packages/shared/src"
import { FC } from "react"

const Task1 = `
function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>+</button>
      <Child onClick={handleClick} />
    </>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log('Child render');
  return <button onClick={onClick}>Child</button>;

 });`

export const CardsReact: FC = ({ }) => {
    return (
        <Section>
            <Typography variant="h2" children={"React Core (база, но уверенно)"} />
            <Grid cols={1} md={2} lg={3} gap="md" >
                <Card>
                    <Typography variant="h3">
                        reconciliation, virtual DOM (на уровне идей)
                    </Typography>
                    <Typography variant="p">
                        <strong>Reconciliation</strong> - это внутренний алгоритм согласования, используемый в React, который сравнивает предыдущее virtual DOM-tree с новым, построенным после изменения props или state.
                        <br /><br />
                        <strong>Процесс Reconciliation включает 4 этапа:</strong>
                        <br />
                        1. <strong>Изменение состояния</strong> - триггерит перерисовку
                        <br />
                        2. <strong>Отрисовка виртуального дерева</strong> - легковесная копия реального DOM, которая хранится в памяти
                        <br />
                        3. <strong>Сравнение нового virtual DOM-tree с текущим</strong> (diffing)
                        <br />
                        4. <strong>Применение изменений (Commit)</strong> - точечное внесение изменений в DOM, применяются только найденные различия
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        controlled vs uncontrolled components
                    </Typography>
                    <Typography variant="p">
                        <strong>Controlled components</strong> - компоненты, состояние которых полностью контролируется React через state или props (value или onChange у input).
                        <br /><br />
                        <strong>Uncontrolled components</strong> - компоненты используют внутреннее состояние DOM, и доступ к значению состояния происходит через ref.
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        lifting state up
                    </Typography>
                    <Typography variant="p">
                        <strong>Поднятие состояния</strong> - это паттерн, при котором общее состояние, необходимое нескольким дочерним компонентам, переносится в ближайшего родителя.
                        <br /><br />
                        Дочерние компоненты могут взаимодействовать с ним через props или callback-функции.
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        memo / useMemo / useCallback — когда реально нужны
                    </Typography>
                    <Typography variant="p">
                        <strong>React.memo</strong> - предотвращает ререндер компонента, если его props не изменились.
                        <br />
                        <strong>React.useMemo</strong> - мемоизирует результат вычислений, используется при дорогих операциях.
                        <br />
                        <strong>React.useCallback</strong> - мемоизирует функцию, чтобы её ссылка оставалась стабильной между рендерами.
                        <br /><br />
                        <strong>Их не стоит использовать всегда!</strong> Они нужны только при реальных проблемах с производительностью:
                        <br />
                        • Поиск в больших списках
                        <br />
                        • Фильтрация и сортировка больших таблиц
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        разница useEffect / useLayoutEffect
                    </Typography>
                    <Typography variant="p">
                        <strong>useEffect</strong> - выполняется после того, как браузер отрисовал DOM (асинхронно).
                        <br /><br />
                        <strong>useLayoutEffect</strong> - выполняется синхронно после изменения DOM, но до его отображения пользователю. Может блокировать отрисовку.
                        <br /><br />
                        <strong>useLayoutEffect</strong> используют редко, только когда нужно:
                        <br />
                        • Измерять DOM-элементы
                        <br />
                        • Синхронно изменять layout
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        бесконечный ререндер
                    </Typography>
                    <Typography variant="p">
                        Бесконечный ререндер - каждый рендер вызывает следующий, создавая бесконечный цикл.
                        <br />
                        Такая проблема, когда изменение state происходит:
                        <br />
                        • В момент render (непосредственно в теле компонента)
                        <br />
                        • В useEffect без корректного массива зависимостей
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        ленивая инициализация тяжелых вычислений
                    </Typography>
                    <Typography variant="p">
                        <code>const [state, setState] = useState(() ={">"} expensiveInit());</code>
                        <br /><br />
                        <strong>Это ленивая инициализация</strong> с помощью хука useState.
                        <br /><br />
                        <code>() ={">"} expensiveInit()</code> - передавая в useState функцию, а не результат вызова <code>expensiveInit()</code>, мы вызываем функцию только один раз в момент инициализации, а не при каждом ререндере.
                        <br /><br />
                        <strong>Когда использовать:</strong>
                        <br />
                        • Инициализация требует сложных вычислений
                        <br />
                        • Нужно загрузить данные из localStorage
                        <br />
                        • Создание тяжелых объектов или структур данных
                    </Typography>
                </Card>
                <Card>
                    <Typography variant="h3">
                        Отличие пропсов от состояния
                    </Typography>
                    <Typography variant="p">
                        <strong>PROPS (свойства):</strong>
                        <br />• Данные, передаваемые извне (от родителя к ребёнку)
                        <br />• Только для чтения (immutable)
                        <br />• Изменяются при перерисовке родительского компонента
                        <br /><br />
                        <strong>STATE (состояние):</strong>
                        <br />• Данные, управляемые внутри компонента
                        <br />• Могут изменяться через setState / useState
                        <br />• При изменении вызывают перерисовку компонента
                        <br /><br />
                        <em>Простые правила:</em>
                        <br />• Если данные приходят сверху → это <strong>props</strong>
                        <br />• Если данные создаются и меняются внутри → это <strong>state</strong>
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Жизненный цикл компонентов (mount/update/unmount)
                    </Typography>
                    <Typography variant="p">
                        <strong>Этапы жизненного цикла:</strong>
                        <br />• <strong>MOUNT</strong> - компонент создаётся и монтируется в DOM
                        <br />• <strong>UPDATE</strong> - компонент обновляется при изменении state/props
                        <br />• <strong>UNMOUNT</strong> - компонент удаляется из DOM
                        <br /><br />
                        <strong>В классовых компонентах:</strong>
                        <br />• <code>constructor() → render() → componentDidMount()</code>
                        <br />• <code>shouldComponentUpdate() → render() → componentDidUpdate()</code>
                        <br />• <code>componentWillUnmount()</code>
                        <br /><br />
                        <strong>В функциональных компонентах (хуки):</strong>
                        <br />• Mount: <code>useEffect(() ={">"} {"{"}...{"}"}, [])</code>
                        <br />• Update: <code>useEffect(() ={">"} {"{"}...{"}"}, [deps])</code>
                        <br />• Unmount: <code>useEffect(() ={">"} {"{"} return () ={">"} {"{"}cleanup{"}"} {"}"}, [])</code>
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Контекст и когда его использовать
                    </Typography>
                    <Typography variant="p">
                        <strong>Контекст (Context)</strong> - механизм для передачи данных глубоко вниз по дереву компонентов без prop drilling.
                        <br /><br />
                        <strong>Когда использовать:</strong>
                        <br />• Глобальные настройки: тема, язык, аутентификация
                        <br />• Статичные или редко изменяемые данные
                        <br />• Чтобы избежать передачи props через 3+ уровня
                        <br /><br />
                        <strong>Когда НЕ использовать:</strong>
                        <br />• Часто обновляемые сложные состояния
                        <br />• Сложная бизнес-логика (лучше Redux/Zustand)
                        <br /><br />
                        ⚠️ <strong>Важно:</strong> Context вызывает ререндер ВСЕХ потребителей при изменении значения.
                    </Typography>
                </Card>
            </Grid>
            <Typography variant="h2">React 18+ особенности</Typography>

            <Grid cols={1} md={2} lg={3} gap="md">
                <Card>
                    <Typography variant="h3">
                        BATCHING (автоматическая группировка)
                    </Typography>
                    <Typography variant="p">
                        <strong>Что изменилось в React 18:</strong>
                        <br />Раньше: группировка только в обработчиках событий (onClick, onChange)
                        <br />Теперь: группировка работает везде (setTimeout, Promise, etc.)
                        <br /><br />
                        <strong>Преимущества:</strong>
                        <br />✅ Меньше ререндеров
                        <br />✅ Меньше работы для reconciliation
                        <br />✅ Более плавный UI
                        <br /><br />
                        <strong>flushSync</strong> - обход автоматической группировки:
                        <br /><code>flushSync(() ={">"} setState(value))</code>
                        <br />Используется редко (для измерений DOM, управления фокусом).
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        CONCURRENT FEATURES
                    </Typography>
                    <Typography variant="p">
                        <strong>Concurrent React</strong> - возможность приоритизировать обновления.
                        <br /><br />
                        <strong>Ключевые API:</strong>
                        <br />• <code>startTransition</code> - для обработчиков событий
                        <br />• <code>useTransition</code> - для компонентов + индикатор загрузки
                        <br />• <code>useDeferredValue</code> - отложенное обновление UI
                        <br /><br />
                        <strong>Suspense в React 18:</strong>
                        <br />• Не только для lazy loading компонентов
                        <br />• Ожидание данных с fallback UI
                        <br />• SSR streaming (Next.js 13+)
                        <br /><br />
                        <em>Всё это улучшает UX без сложных оптимизаций.</em>
                    </Typography>
                </Card>

            </Grid>
            <Typography variant="h2">Задачки и решения</Typography>
            <Grid cols={1} md={2} lg={3} gap="md" >
                <Card>

                    <CodeBlock
                        code={Task1}
                        language="tsx"
                    />

                    <Typography variant="h3" children="Вопросы:" />
                    <Typography variant="p">

                        <strong className="text-xl">Почему Child всё равно ререндерится?</strong>
                        <br />потому что ссылка на функцию передаваемая в Child не стабилизирована.
                        перерисовка родителя вызывает переобъявление функции, получается что пропс меняется и это вызывает ререндер
                        <br /><br />
                        <strong className="text-xl"> Как минимально исправить код?</strong>
                        <br /> обернуть функцию в useCallback

                        <CodeBlock
                            code={`  const handleClick = useCallback(() => {
                                setCount(count + 1);
                                }, []);`}
                            language="tsx"
                        />
                        <br /><br />
                        <strong className="text-xl"> В каком случае не нужно ничего оптимизировать?</strong>
                        <br />если компонент легкий, не содержит дорогих вычислений и лишние ререндеры не создают проблем с производительностью, то доп оптимизация не нужна.

                    </Typography>
                </Card>
            </Grid>

        </Section>
    )
}


// function Example() {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     setValue(value + 1);
//   }, [value]);

//   return <div>{value}</div>;
// }

// Вопросы:
// Почему возникает бесконечный ререндер? 
// useEffect имеет зависимость, которую сам же и изменяет setValue(value + 1) при каждом ререндере

// Как React обрабатывает зависимости useEffect? 
//useEffect сравнивает каждое значение в массиве зависимостей с предыдущим.
//  если хотя бы одна из зависемостей изменилась вызывается useEffect.
//  если ничего не изменилос -не вызывается

// Какие есть варианты исправления? 
// 1. очистить массив зависимостей и установить конкретное значение
// 2. очистить массив зависимостей и использовать функциональный  setState, если нужно использовать предыдущее состояние,
//  setValue(prev => prev + 1);
// 3. использовать условие
// if(value<5){
//  setValue(value + 1);
// }

// Когда подобное поведение может быть оправдано? 
// бесконечный рендер не может быть оправдан никогда. это логическая ошибка. её возникновение тормозит UI и грузит  браузер

// но!  ситуации, где эффект вызывает обновление состояния, от которого он зависит, может иногда использоваться
// Анимации с requestAnimationFrame
// , но с контролируемыми условиями, предотвращающими бесконечный цикл.

