import { Container, Section, Card, Typography, Grid, CodeBlock } from "@packages/shared/src"
import { FC, useState } from "react"
import { flushSync } from "react-dom"

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
            <Grid cols={1} md={1} lg={2} gap="md" >
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

// 🧠 Задача 2 — Бесконечный ререндер
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
// 1. очистить массив зависимостей и установить конкретное значение(для случая если эффект должен вызваться один раз)
// 2. очистить массив зависимостей и использовать функциональный  setState, если нужно использовать предыдущее состояние,
//  setValue(prev => prev + 1);
// 3. использовать условие
// if(value<5){
//  setValue(value + 1);
// }

// Когда подобное поведение может быть оправдано? 
// Настоящий бесконечный ререндер - это логическая ошибка. её возникновение тормозит UI и грузит  браузер

// но!  ситуации, где эффект вызывает обновление состояния, от которого он зависит, может иногда использоваться
// Анимации с requestAnimationFrame, 
// useEffect(() => {
//   let animationId;

//   const animate = () => {
//     setProgress(prev => {
//       const next = prev + 0.01;
//       return next >= 1 ? 1 : next;
//     });

//     if (progress < 1) {
//       animationId = requestAnimationFrame(animate);
//     }
//   };

//   animationId = requestAnimationFrame(animate);
//   return () => cancelAnimationFrame(animationId);
// }, []);

//  Polling/лонг-поллинг (с интервалом!)
//  useEffect(() => {
//   const interval = setInterval(() => {
//     fetchData().then(data => setData(data));
//   }, 5000); // Интервал предотвращает бесконечный цикл

//   return () => clearInterval(interval);
// }, []);
// , но с контролируемыми условиями, предотвращающими бесконечный цикл.

// __________________________________________


// Задача 3 — Ошибка в useEffect
// function UserProfile({ userId }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetchUser(userId).then(setUser);
//   }, []);

//   return <div>{user?.name}</div>;
// }
// Вопросы:
// В чём проблема с зависимостями? 
//  в зависимости нужно добавить userId, эффект выполнится только при монтировании и не будер реагировать на изменения.

// Когда баг проявится?
// когда компонент не размонтируется, а userId изменится,
// нпр:
// при смене профиля пользователя 
// или при получении новый props от родителя.

// Почему eslint будет ругаться?
// правило react-hooks/exhaustive-deps или замыкание. 
//  es-lint следит за тем, чтобы все переменные из области видимости компонента используемые в хуке, были указаны в зависимостях.

// Как правильно описать зависимости?

//   useEffect(() => {
//     fetchUser(userId).then(setUser);
//   }, [userId]);


// ________________________________________________


// Задача 4 — useMemo, который не работает

// const filteredList = useMemo(() => {
//   return items.filter(item => item.active);
// }, [items]);
// tsx
// Копировать код
// return <List data={filteredList} />;



// Вопросы:
//  useMemo имеет смысл только при дорогих вычислениях  и частых ререндерах. если массив маленький и оптимизация ничего не дает ее лучше убрать так как она может вредить читаемости.
// В каких случаях useMemo здесь бесполезен?
// items не большой массив, 
// фильтрация дешёвая операция
// компонент редко рендерится
// List не мемоизирован не использует React.Memo

// Что должно быть правдой, чтобы он имел смысл?
// items огромный массив
// фильтрация или вычисления дорогие
// компонент часто ререндорится по причинам не связанным с items
// filteredList передается в мемо компонет 

// Когда его стоит удалить? 
// нет реальной проблемы с производительностью
// items всегда пересоздается
// оптимизация не влияет на ререндеры


// __________________________
// Задача 5 — useLayoutEffect vs useEffect
// function Tooltip() {
//   const ref = useRef(null);

//   useEffect(() => {
//     const height = ref.current.getBoundingClientRect().height;
//     console.log(height);
//   }, []);

//   return <div ref={ref}>Tooltip</div>;
// }

// Вопросы:
//   useEffect замеряет DOM после отрисовки, а значит если полученный height будет вносить изменения в стили, то может появится подергивание. 
// В данном случае лучше использовать useLayoutEffect, он запускается синхронно с изменениями, но до отрисовки пользователю. 
// его как раз используют для измерения Dom элементов или изменения с layout, но нужно быть осторожными, так как он может блокировать отрисовку.


// Может ли здесь быть визуальный баг? 
// Да может потому что  useEffect замеряет DOM после отрисовки, а значит если полученный height будет вносить изменения в стили, то может появится подергивание.

// Когда лучше использовать useLayoutEffect? 
//  для измерения Dom элементов или изменения с layout

// Какие риски у useLayoutEffect?
//  может блокировать отрисовку и влиять на производительность

// _________________________________________________

// Задача 6 — Lazy init, но всё равно медленно
// function Component() {
//   const [data] = useState(() => expensiveInit());

//   return <div>{data.value}</div>;
// }

// Вопросы:
// Lazy init это не про скорость, а про колличество раз которое функция будет выполнятся.  
// lazy int d useState позволяет выполнить тяжелую функцию  один раз при инициализации компонента, и не делать это при каждом ререндере.


// Почему компонент всё равно может тормозить?
//  из-за частых обновлений, тяжелого рендера или сложной логики внутри jsx

// Когда lazy init не спасает?
// не спасает, если сама функция expensiveInit вызывается только один раз, а сама структура данных, испопользуется затем в тяжёлых операциях при каждом рендере.

// Что ещё может вызывать проблему производительности?
// lazy init не помогает если проблема не в самой инициализации.
// в таком случае надо проверить ререндеры мемоизацию и структуру компонентов.

// ________


// 🧠 Задача 7 — Virtual DOM и keys
// {items.map((item, index) => (
//   <Item key={index} item={item} />
// ))}

// Вопросы:
// индекс не является индивидуальным индификатором, при удалении или добавлении элементов в массив индексы смещаются,
//  React  связывает компонент с ключом(key), а не данными, поэтому при reconciliation использование key индекс в качестве ключа, 
//  может приветси к тому, что React неправильно переиспользует DOM-узлы и состояния компонентов, что может привести к багам.

//  index допустим как key для полностью статичных масивов, в которых не предусмотренно изменение колличества элементов, 
// т.е  элементы никогда не будут удаляться, добавляться или менять порядок


// Почему использование index как key — потенциальная проблема?

// Как это влияет на reconciliation?

// В каких случаях index допустим?




// _______


// 🧠 Задача 8 — Непредсказуемый ререндер
// export function Counter() {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//         setCount(count + 1);
//     };

//     return <button onClick={increment}>{count}</button>;
// }




// Почему результат может быть неожиданным?

// скорее всего результат будет неожиданным так как написав такой код мы ожидаем что count увеличится на два,
// но это не произойдет так как оба setCount используют одно и тоже замкнутое значение count
// React использует batching(автоматическую группировку), и в итоге оба обновления приведут к одному и томуже результату а не к увеличению на два.


// Как работает batching обновлений? 
// так происходит потому что оба setCount используют одно и тоже замкнутое значение count.
// React груперует несколько изменений состояния в один ререндер, если если оба обновления используют одно и тоже замкнутое
//  значчение результат может быть неожиданным
// batching не суммирует результат изменений, он уменьшает колличество ререндеров.

// Как переписать корректно?
// если нужно +2
// лучше всего использовать функциональный setState 
// const increment = () => {
//     setCount(prev => prev + 1);
//     setCount(prev => prev + 1);
//   };
// при функциональном setState batching все равно отработает, но каждый вызов setCount получит актуальное значение.

// есть способ обойти batching используя flushSync, его используют чтобы синхронно применить обновления и сразу работать с DOM, но он не подходит для арифметики состояния это плохая практика.

// const increment = () => {
//     setCount(count + 1);
//     flushSync(() => setCount(count + 1))
// };


//для простых случаев можно сразу вычислять новое значение, но для последовательны обнавлений больше подходит функцил=ональный setState
// const increment = () => {
//     setCount(count + 2);
//   };
