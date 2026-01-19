

import { Card, Grid, Section, Typography } from "@packages/shared/src";

export function TestCard({ }) {
    return (
        <Section>
            <Typography variant="h2" children={"Тесты"} />
            <Grid cols={1} md={2} lg={3} gap="md" >

                <Card>
                    <Typography variant="h3">
                        Jest vs React Testing Library
                    </Typography>
                    <Typography variant="p">
                        <strong>Jest</strong> — это test runner и фреймворк для тестирования JavaScript кода.
                        <br /><br />
                        <strong>React Testing Library (RTL)</strong> — это библиотека для тестирования React компонентов,
                        которая поощряет тестирование с точки зрения пользователя.
                        <br /><br />
                        <strong>Ключевые отличия:</strong>
                        <br />• <strong>Jest</strong>: Универсальный, работает с любым JS кодом, имеет встроенные моки, snapshot тестирование
                        <br />• <strong>RTL</strong>: Специализирован для React, фокусируется на поведении, а не реализации
                        <br /><br />
                        <strong>Они дополняют друг друга:</strong>
                        <br />Jest обеспечивает инфраструктуру (запуск тестов, assertions, моки),
                        <br />RTL предоставляет инструменты для работы с React компонентами.
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Что тестировать, а что нет
                    </Typography>
                    <Typography variant="p">
                        <strong>Тестировать обязательно:</strong>
                        <br />• Бизнес-логика (функции, утилиты, хелперы)
                        <br />• Критичные пользовательские сценарии
                        <br />• Компоненты с состоянием
                        <br />• Формы и валидация
                        <br />• API вызовы и обработка ошибок
                        <br />• Маршрутизация (routing)
                        <br /><br />
                        <strong>Не стоит тестировать:</strong>
                        <br />• Третьи стороны (библиотеки, фреймворки)
                        <br />• Константы и статические данные
                        <br />• Стили и CSS
                        <br />• Тривиальную логику (1+1=2)
                        <br />• Всё подряд (тесты ради тестов)
                        <br /><br />
                        <strong>Принцип "тестируй поведение, а не реализацию":</strong>
                        <br />Лучше тестировать "что делает компонент", а не "как он это делает".
                    </Typography>
                </Card>
               

                <Card>
                    <Typography variant="h3">
                        Что важнее — snapshot или behavior?
                    </Typography>
                    <Typography variant="p">
                        <strong>Behavior тестирование (приоритет):</strong>
                        <br />• Тестирует <strong>поведение</strong> компонента с точки зрения пользователя
                        <br />• Проверяет "что делает", а не "как выглядит"
                        <br />• Устойчиво к рефакторингу (меняется реализация, но не поведение)
                        <br />• Пример: "При клике на кнопку показывается модальное окно"
                        <br /><br />
                        <strong>Snapshot тестирование (вспомогательное):</strong>
                        <br />• Фиксирует <strong>внешний вид</strong> компонента
                        <br />• Полезно для предотвращения случайных изменений
                        <br />• Хрупкое — ломается при любом изменении разметки
                        <br />• Пример: "Рендеринг компонента не изменился неожиданно"
                        <br /><br />
                        <strong>Мой подход:</strong>
                        <br />✅ <strong>Основной фокус — behavior тесты</strong> для критичной функциональности
                        <br />✅ <strong>Snapshot — ограниченно</strong> для стабильных, редко меняющихся компонентов
                        <br />✅ <strong>Избегать snapshot для:</strong> часто меняющихся UI, компонентов с динамическим контентом
                        <br /><br />
                        <strong>Лучшая практика:</strong>
                        <br />1. Сначала пишем behavior тесты для ключевых сценариев
                        <br />2. Добавляем snapshot для сложных, стабильных компонентов
                        <br />3. Регулярно обновляем snapshot при преднамеренных изменениях
                        <br />4. Используем snapshot как "раннее предупреждение", а не как основной тест
                    </Typography>
                </Card>

                <Card>
                    <Typography variant="h3">
                        Типы тестов в React (пирамида тестирования)
                    </Typography>
                    <Typography variant="p">
                        <strong>1. Unit тесты (основа):</strong>
                        <br />• Тестируют отдельные функции, утилиты, хуки
                        <br />• Быстрые, изолированные, много покрытия
                        <br />• Jest + React Testing Library
                        <br /><br />
                        <strong>2. Integration тесты (самые важные):</strong>
                        <br />• Тестируют взаимодействие нескольких компонентов
                        <br />• Проверяют пользовательские сценарии
                        <br />• React Testing Library + MSW (Mock Service Worker)
                        <br /><br />
                        <strong>3. E2E тесты (верхушка):</strong>
                        <br />• Тестируют полный поток в реальном браузере
                        <br />• Медленные, хрупкие, но самые реалистичные
                        <br />• Cypress, Playwright, Selenium
                        <br /><br />
                        <strong>Золотое правило:</strong>
                        <br />• Много unit тестов (60-70%)
                        <br />• Достаточно integration тестов (20-30%)
                        <br />• Несколько критичных E2E тестов (5-10%)
                    </Typography>
                </Card>
                 <Card>
                    <Typography variant="h3">
                        Как протестировать форму?
                    </Typography>
                    <Typography variant="p">
                        <strong>1. Подготовка:</strong>
                        <br /><code>import {"{"} render, screen, fireEvent {"}"} from '@testing-library/react';</code>
                        <br /><code>import userEvent from '@testing-library/user-event';</code>
                        <br /><br />
                        <strong>2. Рендерим форму:</strong>
                        <br /><code>render({"<"}LoginForm onSubmit={"{"}mockSubmit{"}"} /{">"});</code>
                        <br /><br />
                        <strong>3. Находим элементы:</strong>
                        <br /><code>const emailInput = screen.getByLabelText(/email/i);</code>
                        <br /><code>const passwordInput = screen.getByLabelText(/password/i);</code>
                        <br /><code>const submitButton = screen.getByRole('button', {"{"} name: /sign in/i {"}"});</code>
                        <br /><br />
                        <strong>4. Симулируем пользовательские действия:</strong>
                        <br /><code>// Вводим данные</code>
                        <br /><code>await userEvent.type(emailInput, 'test@example.com');</code>
                        <br /><code>await userEvent.type(passwordInput, 'password123');</code>
                        <br /><br /><code>// Кликаем кнопку</code>
                        <br /><code>await userEvent.click(submitButton);</code>
                        <br /><br />
                        <strong>5. Проверяем результаты:</strong>
                        <br /><code>// Проверяем вызов onSubmit</code>
                        <br /><code>expect(mockSubmit).toHaveBeenCalledWith({"{"}</code>
                        <br /><code>&nbsp;&nbsp;email: 'test@example.com',</code>
                        <br /><code>&nbsp;&nbsp;password: 'password123'</code>
                        <br /><code>{"}"});</code>
                        <br /><br /><code>// Проверяем валидацию</code>
                        <br /><code>await userEvent.clear(emailInput);</code>
                        <br /><code>await userEvent.click(submitButton);</code>
                        <br /><code>expect(screen.getByText(/email is required/i)).toBeInTheDocument();</code>
                        <br /><br />
                        <strong>6. Дополнительные проверки:</strong>
                        <br />• Загрузочное состояние кнопки
                        <br />• Сообщения об ошибках
                        <br />• Очистка формы после успешной отправки
                        <br />• Валидация в реальном времени
                    </Typography>
                </Card>
            </Grid>
        </Section>
    )
}
// 🔹 День 6 — Тесты + async

// Цель: показать зрелость.

// Повторить

// Jest vs React Testing Library

// что тестировать, а что нет

// async / await + event loop (на базовом уровне)

// Практика

// Устно:

// «Как протестировать форму?»
// «Что важнее — snapshot или behavior?»
