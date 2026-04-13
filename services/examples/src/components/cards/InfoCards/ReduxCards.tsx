import { Card, Grid, Section, Typography } from "@packages/shared/src";
import { permission } from "process";

export function ReduxCards({ }) {
    return (
        <Section>
            <Typography variant="h2" children={"Redux / архитектура"} />
            <Grid cols={1} md={1} lg={2} gap="md" >
                <Card>
                    <Typography variant="h3">
                        Зачем Redux, когда Context достаточно?
                    </Typography>
                    <Typography variant="p">
                        <strong>Context подходит для:</strong>
                        <br />• Редко обновляемых глобальных данных
                        <br />• Темы, языка интерфейса
                        <br />• Аутентификации пользователя
                        <br />• Простых приложений

                        <br /><br /><strong>Проблемы Context для сложной логики:</strong>
                        <br />❌ Нет централизованного управления состоянием
                        <br />❌ Нет инструментов для асинхронных сценариев
                        <br />❌ Сложно отслеживать изменения
                        <br />❌ Нет DevTools для отладки
                        <br />❌ При изменении перерисовываются ВСЕ потребители

                        <br /><br /><strong>Когда нужен Redux:</strong>
                        <br />✅ Масштабные приложения
                        <br />✅ Активно изменяющееся состояние
                        <br />✅ Сложная бизнес-логика
                        <br />✅ Потребность в предсказуемом управлении
                        <br />✅ Необходимость отслеживать изменения (DevTools)
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Поток данных в Redux
                    </Typography>
                    <Typography variant="p">
                        <strong>Однонаправленный поток данных:</strong>

                        <br /><br /><strong>1. Dispatch action:</strong>
                        <br /><code>dispatch({"{"} type: "ADD_TODO", payload: text {"}"})</code>
                        <br />Action — объект с описанием "что произошло"

                        <br /><br /><strong>2. Middleware (опционально):</strong>
                        <br />• Логирование
                        <br />• Асинхронная логика (thunk/saga)
                        <br />• Побочные эффекты
                        <br /><code>// Thunk middleware</code>
                        <br /><code>dispatch(asyncAction)</code>

                        <br /><br /><strong>3. Reducer:</strong>
                        <br />• Чистая функция (без side-effects)
                        <br />• Вычисляет новое состояние
                        <br /><code>function reducer(state, action) {"{"}</code>
                        <br /><code>&nbsp;&nbsp;switch(action.type) {"{"}</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;case "ADD_TODO":</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return {"{"} ...state, todos: [...state.todos, action.payload] {"}"};</code>
                        <br /><code>&nbsp;&nbsp;{"}"}</code>
                        <br /><code>{"}"}</code>

                        <br /><br /><strong>4. Store update → UI re-render:</strong>
                        <br />Store обновляется → Компоненты подписанные на изменения перерисовываются
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Redux Saga vs Thunk
                    </Typography>
                    <Typography variant="p">
                        <strong>Redux Thunk:</strong>
                        <br />✅ Простой middleware
                        <br />✅ Использует async/await
                        <br />✅ Подходит для простых запросов
                        <br /><code>const fetchUser = () ={">"} async dispatch ={">"} {"{"}</code>
                        <br /><code>&nbsp;&nbsp;const user = await api.getUser();</code>
                        <br /><code>&nbsp;&nbsp;dispatch({"{"} type: "SET_USER", user {"}"});</code>
                        <br /><code>{"}"}</code>

                        <br /><br /><strong>Redux Saga:</strong>
                        <br />✅ Использует генераторы (generators)
                        <br />✅ Сложные асинхронные сценарии
                        <br />✅ Эффекты для управления потоком
                        <br /><br /><strong>Возможности Saga:</strong>
                        <br />• Параллельные запросы
                        <br />• Отмена эффектов
                        <br />• Ретраи запросов
                        <br />• Оркестрация потоков

                        <br /><br /><strong>Ключевые эффекты Saga:</strong>
                        <br /><code>put()</code> — диспатчит action
                        <br /><code>take()</code> — слушает action
                        <br /><code>call()</code> — вызывает асинхронную функцию
                        <br /><code>fork()</code> — запускает задачу параллельно
                        <br /><code>select()</code> — читает данные из store
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Нормализация данных в Redux
                    </Typography>
                    <Typography variant="p">
                        <strong>Что это такое:</strong>
                        <br />Хранение сущностей в виде словарей по id и отдельных массивов идентификаторов.

                        <br /><br /><strong>До нормализации:</strong>
                        <br /><code>{"{"} todos: [</code>
                        <br /><code>&nbsp;&nbsp;{"{"} id: 1, text: "Learn Redux" {"}"},</code>
                        <br /><code>&nbsp;&nbsp;{"{"} id: 2, text: "Build app" {"}"},</code>
                        <br /><code>] {"}"}</code>

                        <br /><br /><strong>После нормализации:</strong>
                        <br /><code>{"{"}</code>
                        <br /><code>&nbsp;&nbsp;entities: {"{"}</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;todos: {"{"}</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1: {"{"} id: 1, text: "Learn Redux" {"}"},</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2: {"{"} id: 2, text: "Build app" {"}"},</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
                        <br /><code>&nbsp;&nbsp;{"}"},</code>
                        <br /><code>&nbsp;&nbsp;ids: [1, 2]</code>
                        <br /><code>{"}"}</code>

                        <br /><br /><strong>Преимущества:</strong>
                        <br />✅ Избегаем дублирования данных
                        <br />✅ Упрощаем обновление сущностей
                        <br />✅ Улучшаем производительность
                        <br />✅ Легко получаем данные по ID

                        <br /><br /><strong>Библиотеки для нормализации:</strong>
                        <br />• <code>normalizr</code>
                        <br />• <code>@reduxjs/toolkit</code> с <code>createEntityAdapter</code>
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Кейс: Организация глобального состояния
                    </Typography>
                    <Typography variant="p">
                        <strong>Вопрос на собеседовании:</strong>
                        <br />"Как вы организовывали глобальное состояние в проекте?"

                        <br /><br /><strong>Мой ответ (структурированный):</strong>

                        <br /><strong>1. Архитектура:</strong>
                        <br />• Использовали Redux + Redux Saga
                        <br />• Domain-based подход (разделение по бизнес-доменам)

                        <br /><br /><strong>2. Организация состояния:</strong>
                        <br />• Для модуля опросов: отдельное состояние
                        <br />• Разделение на <code>widget</code> и <code>page</code> логику
                        <br />• Widget — UI состояние (открыт/закрыт)
                        <br />• Page — бизнес-данные (опросы, ответы)

                        <br /><br /><strong>3. Хранение данных:</strong>
                        <br />• Нормализованное хранение через <code>entities</code> и <code>ids</code>
                        <br />• Серверные модели расширялись Redux-полями
                        <br />• <strong>Без дублирования типов!</strong>

                        <br /><br /><strong>4. Асинхронная логика:</strong>
                        <br />• Redux Saga для сложных сценариев
                        <br />• Разделение на worker sagas и watcher sagas
                        <br />• Обработка ошибок, ретраи, отмена

                        <br /><br /><strong>5. Преимущества подхода:</strong>
                        <br />✅ Предсказуемость изменений
                        <br />✅ Легкая отладка через Redux DevTools
                        <br />✅ Масштабируемость
                        <br />✅ Переиспользуемая логика
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Современный Redux (Redux Toolkit)
                    </Typography>
                    <Typography variant="p">
                        <strong>Redux Toolkit (RTK)</strong> — официальный подход для написания Redux логики.



                        <br /><br /><strong>Ключевые возможности:</strong>
                        <br /><code>configureStore()</code> — настройка store с devTools
                        <br /><code>createSlice()</code> — автоматически создаёт actions и reducers
                        <br /><code>createAsyncThunk()</code> — асинхронные actions
                        <br /><code>createEntityAdapter()</code> — нормализация данных

                        <br /><br /><strong>Плюсы RTK:</strong>
                        <br />✅ Меньше шаблонного кода (boilerplate)
                        <br />✅ Встроенные лучшие практики
                        <br />✅ TypeScript поддержка
                        <br />✅ Совместим с существующим Redux
                        <br />✅ Immer для простых обновлений
                        <br />✅ Автоматическая типизация actions
                    </Typography>
                </Card>
                <Card>
                    <Typography variant="h3">Принцип работы Redux Toolkit:</Typography>

                    <Typography variant="p">
                        <strong>кратко:</strong>
                        <br />createSlice позволяет объединить редьюсер и действия в одном месте, уменьшает шаблонный код, автоматически генерирует action creators.</Typography>
                    <Typography variant="p">
                        <strong>подробно:</strong>
                        <br />• Предоставляет готовые утилиты для упрощения работы с Redux
                        <br />• Включает в себя лучшие практики "из коробки"
                        <br />• Использует Immer.js для иммутабельных обновлений
                        <br />• Автоматически настраивает Redux DevTools
                        <br />• Сокращает boilerplate код на 50-70%
                    </Typography>
                    <Typography variant="h3">Отличие createSlice от обычного редьюсера:</Typography>
                    <Typography variant="p">
                        <br />• <strong>Автоматическая генерация action creators</strong> — не нужно писать action types вручную
                        <br />• <strong>Мутабельный код, иммутабельный результат</strong> — можно писать как <code>state.push()</code>, а Immer сделает иммутабельную копию
                        <br />• <strong>Всё в одном месте</strong> — actions, reducers и initialState в одном объекте
                        <br />• <strong>TypeScript-first подход</strong> — автоматический вывод типов
                        <br />• <strong>Простота миграции</strong> — можно постепенно переходить со старого Redux
                    </Typography>
                    <Typography variant="h3">Пример сравнения:</Typography>
                    <Typography variant="p">
                        <br /><code> Старый Redux (20+ строк):</code>
                        <br /><code>const ADD_TODO = 'ADD_TODO';</code>
                        <br /><code>export const addTodo = (text) ={">"} ({"{"} type: ADD_TODO, payload: text {"}"});</code>
                        <br /><code>const reducer = (state = [], action) ={">"} {"{"} ... {"}"};</code>
                    </Typography>
                    <br /><br /><code>// Redux Toolkit (10 строк):</code>
                    <Typography variant="p">
                        <br /><code>const todosSlice = createSlice({"{"}</code>
                        <br /><code>&nbsp;&nbsp;name: 'todos',</code>
                        <br /><code>&nbsp;&nbsp;initialState: [],</code>
                        <br /><code>&nbsp;&nbsp;reducers: {"{"}</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;addTodo: (state, action) ={">"} {"{"}</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state.push(action.payload); // Мутация разрешена!</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
                        <br /><code>&nbsp;&nbsp;{"}"}</code>
                        <br /><code>{"}"});</code>
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Оптимизация ререндеров компонентов с Redux
                    </Typography>
                    <Typography variant="p">
                        <strong>Проблема:</strong> При изменении любого значения в Redux store перерисовываются ВСЕ компоненты,
                        использующие <code>useSelector</code>, даже если их конкретные данные не изменились(потому что useSelector сравнивает по ссылке ===).

                        <br /><br /><strong>1. Использование селекторов с useSelector:</strong>
                        <br /><code>// ❌ Плохо - перерисовывается при любом изменении store</code>
                        <br /><code>const {"{"} user, posts {"}"} = useSelector(state ={">"} state);</code>

                        <br /><br /><code>// ✅ Хорошо - перерисовывается только при изменении user</code>
                        <br /><code>const user = useSelector(state ={">"} state.user);</code>

                        <br /><br /><code>// ✅ Ещё лучше - конкретные поля</code>
                        <br /><code>const userName = useSelector(state ={">"} state.user.name);</code>
                        <br /><code>const userAvatar = useSelector(state ={">"} state.user.avatar);</code>

                        <br /><br /><strong>2. Мемоизация селекторов с Reselect:</strong>
                        <br /><code>import {"{"} createSelector {"}"} from '@reduxjs/toolkit';</code>
                        <br /><br /><code>const selectUser = state ={">"} state.user;</code>
                        <br /><code>const selectPosts = state ={">"} state.posts;</code>
                        <br /><br /><code>// Мемоизированный селектор</code>
                        <br /><code>const selectUserPosts = createSelector(</code>
                        <br /><code>&nbsp;&nbsp;[selectUser, selectPosts],</code>
                        <br /><code>&nbsp;&nbsp;(user, posts) ={">"} posts.filter(post ={">"} post.authorId === user.id)</code>
                        <br /><code>);</code>
                        <br /><br /><code>// Использование в компоненте</code>
                        <br /><code>const userPosts = useSelector(selectUserPosts);</code>

                        <br /><br /><strong>3. React.memo для компонентов:</strong>
                        <br /><code>const UserProfile = React.memo(({"{"} userId {"}"}) ={">"} {"{"}</code>
                        <br /><code>&nbsp;&nbsp;const user = useSelector(state ={">"} state.users[userId]);</code>
                        <br /><code>&nbsp;&nbsp;return {"<"}div{">"}{"{"}user.name{"}"}{"<"}/div{">"};</code>
                        <br /><code>{"}"});</code>

                        <br /><br /><strong>4. Разделение на мелкие слайсы (Redux Toolkit):</strong>
                        <br /><code>// Вместо одного большого состояния</code>
                        <br /><code>{"{"} users, posts, comments, settings, ui {"}"}</code>
                        <br /><br /><code>// Лучше разделить на отдельные слайсы</code>
                        <br /><code>const userSlice = createSlice({"{"} name: 'users', ... {"}"});</code>
                        <br /><code>const postSlice = createSlice({"{"} name: 'posts', ... {"}"});</code>
                        <br /><code>const commentSlice = createSlice({"{"} name: 'comments', ... {"}"});</code>

                        <br /><br /><strong>5. useMemo для производных данных:</strong>
                        <br /><code>const filteredItems = useSelector(state ={">"} state.items);</code>
                        <br /><code>const searchTerm = useSelector(state ={">"} state.search);</code>
                        <br /><br /><code>const filteredList = useMemo(() ={">"} {"{"}</code>
                        <br /><code>&nbsp;&nbsp;return filteredItems.filter(item ={">"} </code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;item.name.includes(searchTerm)</code>
                        <br /><code>&nbsp;&nbsp;);</code>
                        <br /><code>{"}"}, [filteredItems, searchTerm]);</code>

                        <br /><br /><strong>6. Следить за созданием объектов/массивов в селекторах:</strong>
                        <br /><code>// ❌ Плохо - создаёт новый массив при каждом вызове</code>
                        <br /><code>const selectActiveUsers = state ={">"} </code>
                        <br /><code>&nbsp;&nbsp;state.users.filter(user ={">"} user.isActive);</code>

                        <br /><br /><code>// ✅ Хорошо - мемоизированный вариант</code>
                        <br /><code>const selectActiveUsers = createSelector(</code>
                        <br /><code>&nbsp;&nbsp;[state ={">"} state.users],</code>
                        <br /><code>&nbsp;&nbsp;users ={">"} users.filter(user ={">"} user.isActive)</code>
                        <br /><code>);</code>

                        <br /><br /><strong>7. Паттерн "Контейнер-Презентационный компонент":</strong>
                        <br /><code>// Контейнер (подписан на Redux)</code>
                        <br /><code>const UserListContainer = () ={">"} {"{"}</code>
                        <br /><code>&nbsp;&nbsp;const users = useSelector(selectActiveUsers);</code>
                        <br /><code>&nbsp;&nbsp;return {"<"}UserList users={"{"}users{"}"} /{">"};</code>
                        <br /><code>{"}"};</code>
                        <br /><br /><code>// Презентационный компонент (чистый, с React.memo)</code>
                        <br /><code>const UserList = React.memo(({"{"} users {"}"}) ={">"} ... );</code>

                        <br /><br /><strong>Чек-лист оптимизации:</strong>
                        <br />✅ Используйте конкретные селекторы (не весь state)
                        <br />✅ Мемоизируйте сложные вычисления с Reselect
                        <br />✅ Оберните компоненты в React.memo
                        <br />✅ Разделяйте состояние на мелкие слайсы
                        <br />✅ Избегайте создания объектов/массивов в селекторах
                        <br />✅ Используйте контейнерный паттерн
                        <br />✅ Профилируйте производительность React DevTools
                    </Typography>
                </Card>
            </Grid>
        </Section>
    )
}

// День 4 — Redux / архитектура

// Цель: показать опыт больших приложений.


// зачем Redux, когда Context достаточно?
// Context хорошо подходит для редко обновляемых, глобальнных данных  таких как: тема, изменение языка, аутентификация пользователя

//  reactContext не решает проблем сложной бизнес логики:
// у него нет централизованного управления состоянием
// нет инструментов для сложных ассинхронных сценриев
// сложно отслеживать состояние и дебавжить

//  Redux используетсся когда приложение масштабное,состояние активно изменяется, информация используется на разных экранах и требует предсказуемого управения.
//

// поток данных: action → middleware → reducer
// redux использует однонаправленный поток данных:
// компонент диспачит action(т.е описание того что произошло)
// action проходит через middleware, где может быть перехвачен для логирования, ассинхронной логики или побочных эффектов
// reducer - это чистая функция, которая  вычисляет новое состояние на основе action  и текущего стейт.
// после чего store обновляется и UI автоматически перерисовывается







// Redux - Saga vs Thunk(на уровне различий)

// Redux Thunk -простой middleware,  который позволяет писать ассинхронный код внутри action creators используя  async/await
// Хорошо подходит для простых запросов и условий


// Redux - Saga использует генераторы и позволяет описывать сложные ассинхронные сценарии:
// -паралелльные запросы
// -отмену эффектов
// -ретраи
// - откестрацию потоков

// использует эффекты
// put(диспатчит action),
// take(слушает action ),
// call(вызывает ассинхронную функцию),
// fork(запускает задачу параллельно),
// select(читает данные из store)






// нормализация данных
// это хранение сущностуй в виде словарей по id и отдельных массивов индефикаторов.
// это позволяет избежать дублирования данных, упростить обновление сущностей и улучшить производительность redux
// такой подход особенно полезен для работы со списками, таблицами и связанными сущностями






// Подготовь кейс(обязательно!)
// «Как вы организовывали глобальное состояние в проекте ?»
// В проекте  мы организовывала глобальное состояние через Redux и redux-saga.
// В проекте мы использовали domain-based Redux архитектуру.
// Для опросов было отдельное состояние, разделённое на widget и page.
// Данные хранили в нормализованном виде через entities и ids.
// Серверные модели расширяли Redux-специфичными полями, не дублируя типы.
// Асинхронную логику обрабатывали через saga.



// Задача 1 — Saga «не реагирует»
// function* loadSurveys() {
//     yield takeLatest(GET_SURVEYS, fetchSurveys);
// }

// function* fetchSurveys() {
//     yield call(api.getSurveys);
// }
// Вопросы:
// Почему saga может вообще не сработать?
// Worker-саги сами по себе не запускаются.
// Если watcher не подключён к rootSaga или middleware — saga не будет реагировать на actions.

// Где обычно подключается watcher?
// Watcher-саги подключаются в rootSaga, обычно через all или fork.

// Как проверить, что saga реально запущена ?
//     redux  dev tools  диспатчитсяй action, а в network посмотреть,
//         что после action происходит side - effect — например, network - запрос,
//             Добавить временный console.log внутри saga

// Что произойдёт, если забыть yield перед takeLatest ?
//     Если забыть yield, effect не выполнится и watcher не зарегистрируется.

// _________________________________________________________________


// Задача 2 — Бесконечный запрос

// function* fetchData() {
//   yield put(fetchRequest());
// }

// function* watcher() {
//   yield takeLatest(FETCH_REQUEST, fetchData);
// }
// Вопросы:
// Почему возникает бесконечный цикл?
// Бесконечный цикл возникает, когда saga диспатчит action, на который сама же подписана.
// Watcher ловит этот action снова и снова, создавая action loop.
// Чтобы этого избежать, нужно разделять action-триггеры и action-результаты.



// Как отличить watcher от worker?
// watcher использует эффекты takeEvery, takeLatest, takeEvery, takeLeading
// ждет определенные действия, запускает соответсвующие саги

// worker - описывает основную бизнес логику,
//  отправляет запросы, обрабатывает данные,
//  диспатчит действие с ошибками и результатами,
//  выполняется при каждом срабатываении триггера


// Как бы ты это переписал архитектурно?
// Нужно разделить action-триггер и action-результат.
// function* fetchDataWorker() {
//   try {
//     const data = yield call(api.fetch);
//     yield put(fetchSuccess(data));
//   } catch (e) {
//     yield put(fetchFailure(e));
//   }
// }

// function* watcher() {
//   yield takeLatest(FETCH_REQUEST, fetchDataWorker);

// Какие действия должны диспатчиться из saga, а какие — из UI?

// ui - отправка запроса, обраотка действий по клику, отправка формы, изменение фильтров

// saga - обработка данных(нормализация), обработка ошибки, действия для управления состояние загрузки


// ___________________________________________________________________________

// 🔹 Задача 3 — Ошибка не ловится
// function* worker() {
//   try {
//     const data = yield call(api.getData);
//     yield put(success(data));
//   } catch (e) {
//     console.log('error');
//   }
// }

// Вопросы:

// ошибка на самом деле ловится, но она обрабатывается только в саге,


// // Почему reducer не узнает об ошибке?

// сага не диспачит никакого действия сообщающего об ошибке

// store не обновляется
// ui не знает, что произошла ошибка

// // Как правильно обрабатывать ошибки в saga?
// диспатчить действие об ошибке в редьюсер
// правильно логировать ошибку, чтобы видеть ее при отладке
// и опционально показать уведомление.

// // Где должна происходить обработка UI-ошибок?
// зафиксировать глобальное состояние  в redux-store
// описать бизнес-логику  в саге например логирование для отладки, и диспатчить акшионы на изменение состояния и отображение предупреждения в UI.
// добавить отображение предупреждения в компоненте
//  Error Boundaries (React)?

// // Что лучше: try/catch или error-action?
// лучше использовать комбинировано.
// try/catch хорошо подходит для описания сложной логики например сохранить состояние и информацио об ошибки, вывести в console.лог для отладки, и диспатчить экшион с предупреждением об ошибке
// error-action - подходит для простых действий которые могут составлять сложную логику

// P_______________________________________________________

// // Задача 4 — takeLatest «не отменяет»
// // function* worker(action) {
// //   yield call(api.fetch, action.payload);
// // }

// // function* watcher() {
// //   yield takeLatest(FETCH, worker);
// // }

// // Вопросы:

// // В каких случаях предыдущий запрос не будет отменён?
// в случаях когда api - запрос уже был отправлен, если в саге не предусмотрена отмена отправки запроса в случае отмены саги

// // Что произойдёт, если api.fetch не поддерживает отмену?
// запрос не отменется, он дойдет до сервера и может завершиться, но результат будет проигнорирова, такой может нагрузить сервер.

// // Как Saga вообще отменяет эффекты?
// takeLatest отменяет предыдущую задачу посылая в нее сигнал отмены.
// если сага находится в call, то на отменяется только логически.
// физически она отменнится только если ассинхронная функция поддерживает отмену.
// например AbortController


// // Как решить проблему?
// добавив в сагу AbortController

// function* worker(action) {
//     const controller = new AbortController()
//     try {
//         yield call(api.fetch, action.payload, controller.signal);


//     } catch (e) {

//     } finally {

//         if (yield canceled()) {
//             controller.abort()
//         }

//     }

// }

// function* watcher() {
//     yield takeLatest(FETCH, worker);
// }

// ___________________________________________________________

// 🔹 Задача 5 — select возвращает старые данные
// function* worker() {
//   const id = yield select(selectActiveId);
//   yield call(api.fetch, id);
// }

// Вопросы:

// // Почему здесь могут быть устаревшие данные?
//  select читает записть в стор синхронно в момент выполнения эффекта
// если сага была вызвана раньше, чем id был изменен другим action то saga может получить старое значение.


// // Когда select читает store?
//  select читает записть в стор синхронно в момент выполнения эффекта

// // Как гарантировать актуальное состояние?
// передавайть ActiveId через Action.payload

// // В каких случаях лучше передавать данные через action?
// когда данные приходят из Ui
// инициализируются пользователем
// влияют на бизнес-логику ассинхронной функции
// должны быть зафиксированы в момент запуска саги



// _______________________________________________________

// 🔹 Задача 6 — fork vs call
// function* worker() {
//   yield fork(fetchA);- запускает задачу паралелльно и не блакирует выполнение саги
//   yield call(fetchB);- блокирующий эффект, сага будет ждать его завершения.
// }

// Вопросы:

// // В каком порядке выполняются эффекты?
// выполнение fetchA fetchB начнуться одновременно, но worker дождется только выполнения fetchB


// // Что будет, если fetchA упадёт?
// fork изолирует ошибки. если fetchA запущена через fork и упадет то ошибка в исполнение не остановит радительскую сагу. ошибка произойдет в отдельной задаче и не пробросится вверх автоматически.

// // Когда нужен fork, а когда call?
// call нужен:
// когда реультат необходим дальше по логике
// когда ошибка должна остановить сценарий
// важен порядок выполнения

// fork - когда ошибка не должна ломать основй поток,
// задачи должны быть независимыми и их можно выполнять паралелльно


// // Как дождаться завершения fork-саги?
// можно использовать join()
// но проще и безопаснее использовать   call()


// __________________________________________


// 🔹 Задача 7 — debounce руками
// function* watcher() {
//     yield takeLatest(SEARCH, searchWorker);
// }

// function* searchWorker(action) {
//     yield call(api.search, action.payload);
// }

// Вопросы:

// // Почему это плохой debounce ?
// takeLatest - это не debounce, а отмена предыдущего вызова задачи.
// каждый ввод пользователя будет отправляет запрос, даже если предыдущий будет отменен логически, это может привести к большому колличеству сетевых запросов и нагрузке на бэкенд



// // Как сделать debounce через saga ?

// в warker можно использовать delay
//  yield delay(300); Каждый новый search отменяет предыдущую задачу до истеченеи  delay 300.

// или использовать  debounce effect (redux-saga)
// в watcher вместо takeLatest
// yield debounce(300, SEARCH, searchWorker);


// // Чем debounce в saga лучше debounce в компоненте ?
// debounce в saga уентрализирует бизнес-логику и делает ее независимой от компонентов
// работает одинково для всех actions
// сагу проще тестировать

// // В каких сценариях debounce не нужен ?

// запросы отправляются редко
// пользовательское действие осознано
// используется enterили кнопка





// ____________________________________________________

// 🔹 Задача 8 — Race condition
// function* worker() {
//     yield call(api.fetchUser);
//     yield call(api.fetchPermissions);
// }

// Вопросы:

// Где тут потенциальная проблема ?
//     // отсутвие координации между запросами, они выполняются строго последовательно, хотя могут быть связаны или независимы.
//     так же нет обработки ситуации когда один из запрос становится неактуальным или закансиваеется ошибкой.


// // Когда нужен race ?
//     race нужен когда есть TIMEOUT,
//     или пользователь может отменить запрос
//     либо данные не пришли

// // Как отменить один запрос, если второй упал ?

// обработать их через race
// function* worker() {
//     const { data, error } = yield race({
//         data: all([
//             call(api.fetchUser),
//             call(api.fetchPermissions)
//         ]),
//         error: take(FETCH_ERROR)
//     })
// }


// В каких кейсах race — must have ?

// поиск с debounce + отмена
// загрузка данных с timeout
// переключение вкладок
// формы с отменой
//
// ____________________________________________________________________________

// 🔹 Задача 9 — Saga и StrictMode
// function* watcher() {
//   yield takeEvery(LOAD, worker);
// }

// Вопросы:

// Почему в dev-режиме запросы могут происходить дважды?
// потому что в дев режиме со включенным StrictMode react может дважды вызывать жизненый цикл компонентов.
//  из-за этого экшион LOAD тоже вызовется дважды.
//  сага реагирует на вызов action поэтому worker запускается повторно.

// Как это связано с StrictMode? StrictMode дважды запускает эффекты и инициализирует компоненты, чтобы выявить нежелательные побочные эффекты.

// Это баг или ожидаемое поведение? это ожидаемое поведение если вклюючен  строгий режим

// Как защититься? от этого не нужно защищаться это ожидаемое поведение, на проде оно не повторится.
// Но если необходимо избежать дублирование запросов
// то можно диспатчить action вне useEffect
// использовать флаг isLoading или hasLoaded
// использовать takeLatest  вместо takeEvery



// _________________________________________

// 🔹 Задача 10 — Архитектурная ловушка
// function* worker() {
//     const data = yield call(api.getData);
//     yield put(setData(data));
//     yield put(openModal());
// }

// Вопросы:

// // Почему это может быть плохой архитектурой ?
// сага управляет бизнес логикой и состоянием
// модальное окно лучше открывать из компонента.так как иначе сага начинает управлять компонентов, а должна управлять состояние.

// // Где должна решаться логика UI ?
//     в компоненте
//     компоненты должны реагировать на изменение стейт и сами решать что отображаьть

// // Как разделить бизнес - логику и представление ?
// саге сагово, компоненту - компонентово
// бизнес-логика и побочные эффекты  в saga? представление в компонентах.
// // Когда допустимо управлять UI из saga ?
// управлять ui из сага, допустимо в случае глобальных состояний т.к
//             отображение загрузки
//             или ошибки
// уведомления

//       Но даже в этих случаях saga изменяет состояние, а не напрямую управляет ui елементами




// interface MyInterface{
    
// }

// async function myfunc(){
//     return ...{}
// }

// function Parent() {
//   const [state, setState] = useState({value: 0, number: 2, value3: {value4:[{}]}});
//   const myRef = useRef();
  
//   useLayoutEffect(() => {
//     console.log('Parent useLayoutEffect');
//     return () => console.log('Parent useLayoutEffect cleanup');
//   },[state.number]);
  
//   useEffect(() => {
//       function secondFunc(){
//           const resp = await myFunc()
//          setState(resp)
//       }
      
//       secondFunc()
//     console.log('Parent useEffect');
//     return () => console.log('Parent useEffect cleanup');
//   },[]);
  
//   return 
//       (
//        <div onClick={()=>setState((prev)=>({...prev, number: prev.number + 1]})))}></div>
//        <div onClick={()=>setState((prev)=>({...prev, value: prev.value + 1]})))}></div>
//       );
// }

// function Child() {
//   console.log('Child render');
  
//   useLayoutEffect(() => {
//     console.log('Child useLayoutEffect');
//     return () => console.log('Child useLayoutEffect cleanup');
//   });
  
//   useEffect(() => {
//     console.log('Child useEffect');
//     return () => console.log('Child useEffect cleanup');
//   });
  
//   return null;
// }

// // Parent render, 
// 'Child render',
// 'Parent useLayoutEffect', 
// 'Child useLayoutEffect', 