import { Card, Grid, Section, Typography } from "@packages/shared/src";

export function TypeScriptCard({ }) {
    return (
        <Section>
            <Typography variant="h2" children={"TypeScript для фронта"} />
            <Grid cols={1} md={1} lg={2} gap="md" >
                <Card>
                    <Typography variant="h3">
                        Type vs Interface
                    </Typography>
                    <Typography variant="p">
                        <strong>INTERFACE:</strong>
                        <br />• Чаще для объектов, API, пропсов компонентов
                        <br />• Можно расширять (extend)
                        <br />• Declaration merging - объединение объявлений
                        <br /><br />
                        <code>interface User {"{"}</code>
                        <br /><code>&nbsp;&nbsp;name: string;</code>
                        <br /><code>{"}"}</code>
                        <br /><code>interface User {"{"}</code>
                        <br /><code>&nbsp;&nbsp;age: number;</code>
                        <br /><code>{"}"} // User теперь имеет name и age</code>

                        <br /><br />
                        <strong>TYPE:</strong>
                        <br />• Универсальная типизация
                        <br />• Нельзя дополнять
                        <br />• Поддерживает сложные конструкции:
                        <br />&nbsp;&nbsp;✓ Union: <code>string | number</code> значение может быть одним из перечисленных типов.
                        <br />&nbsp;&nbsp;✓ Intersection: <code>TypeA & TypeB</code> значение объединяет свойства всех типов
                        <br />&nbsp;&nbsp;✓ Mapped types -  сопоставление типов, позволяет создать новый тип на основе уже существующего применяя модификаторы к ключам и значениям.
                        <br /><code> {"{"}[P in K]: T {"}"} </code>- базовый синтаксис, где Р перебирает все ключи типа K, а Т представляет тип значения.
                        <br /><code>{"{"}readonly[P in K] ?: T{"}"}</code>  делает все ключи опциональными и доступными только для чтения


                        <br /><br />
                        <strong>Когда что использовать:</strong>
                        <br />• Объекты → interface (если нужно расширять)
                        <br />• Примитивы → type
                        <br />• React props → interface
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Generics (Обобщённые типы)
                    </Typography>
                    <Typography variant="p">
                        <strong>Для чего:</strong> Переиспользуемый типобезопасный код
                        <br /><br />
                        <strong>Где использовать:</strong>
                        <br />• Хуки (useState, useReducer)
                        <br />• Универсальные компоненты
                        <br />• API запросы
                        <br />• Утилиты/вспомогательные функции

                        <br /><br />
                        <strong>Пример:</strong>
                        <br /><code>function identity{"<"}T{">"}(value: T): T {"{"}</code>
                        <br /><code>&nbsp;&nbsp;return value;</code>
                        <br /><code>{"}"}</code>

                        <br /><br />
                        <strong>С ограничениями (constraints):</strong>
                        <br /><code>function getLength{"<"}T extends {"{"}length: number{"}"}{">"}(arr: T) {"{"}</code>
                        <br /><code>&nbsp;&nbsp;return arr.length;</code>
                        <br /><code>{"}"}</code>
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Utility Types (Утилиты)
                    </Typography>
                    <Typography variant="p">
                        <strong>Partial{"<"}T{">"}</strong> - все поля опциональными
                        <br /><code>Partial{"<"}{"{"}name: string, age: number{"}"}{">"}</code>
                        <br /><br />
                        <strong>Pick{"<"}T, K{">"}</strong> - берёт только указанные поля
                        <br /><code>Pick{"<"}User, "name" | "email"{">"}</code>
                        <br /><br />
                        <strong>Omit{"<"}T, K{">"}</strong> - исключает указанные поля
                        <br /><code>Omit{"<"}User, "password"{">"}</code>
                        <br /><br />
                        <strong>Record{"<"}K, V{">"}</strong> - объект с фиксированными ключами
                        <br /><code>Record{"<"}"admin" | "user", boolean{">"}</code>
                        <br /><br />
                        <strong>ReturnType{"<"}typeof fn{">"}</strong> - тип возвращаемого значения
                        <br /><code>ReturnType{"<"}typeof getUser{">"}</code>
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Практика: Типизация fetch
                    </Typography>
                    <Typography variant="p">
                        <strong>Универсальный fetch с типами:</strong>
                        <br /><code>const fetchData = async {"<"}T{">"}(url: string): Promise{"<"}T{">"} ={">"} {"{"}</code>
                        <br /><code>&nbsp;&nbsp;const res = await fetch(url);</code>
                        <br /><code>&nbsp;&nbsp;return res.json();</code>
                        <br /><code>{"}"}</code>

                        <br /><br />
                        <strong>Использование:</strong>
                        <br /><code>interface User {"{"}</code>
                        <br /><code>&nbsp;&nbsp;id: number;</code>
                        <br /><code>&nbsp;&nbsp;name: string;</code>
                        <br /><code>{"}"}</code>
                        <br /><code>const user = await fetchData{"<"}User{">"}("/user/1");</code>

                        <br /><br />
                        <strong>С обработкой ошибок:</strong>
                        <br /><code>: Promise{"<"}T | null{">"}</code>
                        <br />или
                        <br /><code>: {"{"}data: T | null; error?: string{"}"}</code>
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Типизация React-компонентов
                    </Typography>
                    <Typography variant="p">
                        <strong>Через interface (рекомендуется):</strong>
                        <br /><code>interface ButtonProps {"{"}</code>
                        <br /><code>&nbsp;&nbsp;title: string;</code>
                        <br /><code>&nbsp;&nbsp;onClick: () ={">"} void;</code>
                        <br /><code>&nbsp;&nbsp;disabled?: boolean;</code>
                        <br /><code>{"}"}</code>

                        <br /><br />
                        <strong>Без React.FC (современный подход):</strong>
                        <br /><code>function Button({"{"} title, onClick, disabled {"}"}: ButtonProps) {"{"}</code>
                        <br /><code>&nbsp;&nbsp;return {"<"}button onClick={"{"}onClick{"}"} disabled={"{"}disabled{"}"}{">"}</code>
                        <br /><code>&nbsp;&nbsp;&nbsp;&nbsp;{"{"}title{"}"}</code>
                        <br /><code>&nbsp;&nbsp;{"<"}/button{">"};</code>
                        <br /><code>{"}"}</code>

                        <br /><br />
                        <strong>Почему не React.FC?:</strong>
                        <br />• Неявно добавляет <code>children</code>
                        <br />• Меньше гибкости
                        <br />• Явная типизация понятнее
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Mapped Types & Union Types
                    </Typography>
                    <Typography variant="p">
                        <strong>Union Types (|):</strong>
                        <br /><code>type Status = "loading" | "success" | "error";</code>
                        <br /><code>type ID = string | number;</code>

                        <br /><br />
                        <strong>Intersection Types (&):</strong>
                        <br /><code>type Admin = User & {"{"} permissions: string[] {"}"};</code>

                        <br /><br />
                        <strong>Mapped Types (сопоставление):</strong>
                        <br /><code>type Readonly{"<"}T{">"} = {"{"}</code>
                        <br /><code>&nbsp;&nbsp;readonly [P in keyof T]: T[P];</code>
                        <br /><code>{"}"};</code>

                        <br /><br />
                        <strong>С модификаторами:</strong>
                        <br /><code>type PartialReadonly{"<"}T{">"} = {"{"}</code>
                        <br /><code>&nbsp;&nbsp;readonly [P in keyof T]?: T[P];</code>
                        <br /><code>{"}"};</code>
                    </Typography>
                </Card>
                <Card>
                    <Typography variant="h3">
                        Type Assertions & Type Guards
                    </Typography>
                    <Typography variant="p">
                        <strong>Type Assertion (as):</strong>
                        <br /><code>const element = document.getElementById("root") as HTMLDivElement;</code>

                        <br /><br />
                        <strong>Type Guards:</strong>
                        <br /><code>function isString(value: unknown): value is string {"{"}</code>
                        <br /><code>&nbsp;&nbsp;return typeof value === "string";</code>
                        <br /><code>{"}"}</code>

                        <br /><br />
                        <strong>in оператор:</strong>
                        <br /><code>if ("name" in user) {"{"}</code>
                        <br /><code>&nbsp;&nbsp;// user имеет свойство name</code>
                        <br /><code>{"}"}</code>
                    </Typography>
                </Card>
            </Grid>

        </Section>
    )
}




// type IRoles = "admin" | 3 | "maneger"


// type IRules = "canEdit" | "canView" | "canReport"

// type IRolesMap = {
//     [T in IRoles]: {
//         [K in IRules]+?: boolean
//     };
// }

// type IRegistrationForm = {
//     email: string
//     password: string
//     confirmPassword: string
// }

// type IValidationErrors<Type> = {
//     [T in keyof Type]?: string
// }

// const validationErrors: IValidationErrors<IRegistrationForm> = {
//     email: "Email is invalid",
//     password: "Password is invalid",

// }


// type vs interface

// interface
// часто используется для типизации объектов, публичных api и пропсов компонентов
// можно расширять(extend) и дополнять(declaration merging механизм, позволяю объединять несколько объявлений одного и тогоже имени интерфейса, класса, модуля или функции)

// type
// универсальный способ типизации,
//     нельзя дополнять в отличии от interface
// но можно  использовать
// union - т.е перечисление типов через символ |, что означает что значение может быть одним из перечисленных типов.
// intersection - значение перечисленные через & означает что значение объединяет свойства всех типов
// mapped types - сопоставление типов, позволяет создать новый тип на основе уже существующего применяя модификаторы к ключам и значениям.
// нпр: { [P in K]: T } - базовый синтаксис, где Р перебирает все ключи типа K, а Т представляет тип значения.
// { readonly[P in K] ?: T } делает все ключи опциональными и доступными только для чтения


// generics
//  помогает писать переиспользуемый  типобезопастный код там где, тип заранее неизвестен.
//     например: хуки, универсальные компоненты, api запросы




// utility types - утилиты для переиспользования типов

// Partial < T > -делает все поля типа опциональными(не обязательными)

// Pick < T, K > - берет только указанные поля из предоставленного типа.

// Omit < T, K > - исключает указанные поля

// Record < K, V > - объект с фиксированными ключами и одним типом значений
// type Roles = "admin" | "user"

// const permissions: Record<Roles, boolean> = {
//     admin: true,
//     user: false
// }

// ReturnType < typeof fn > - получает тип возвращаемого значения функции




// Практика

// типизировать:

// const fetchData = async<T>(url: string): Promise<T> =>{
//     const res = await fetch(url)

//     return res.json()
// }

//     const user =await fetchData<User>("user/1/")



//         «Как типизировать пропсы React-компонента?»

//         чаще всего используeтся interface,
//         но можно и через type
//         так же не обязательно использовать React.FC, так как он нвязывает children

//         interface ButtonProps{
//             title: string
//             onClick: ()=>void
//         }

//         function Button({title, onClick}:ButtonProps){
//             return <button onClick={onClick}>{title}</button>
//         }

