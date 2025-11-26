import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { portfolioRoutes } from '@packages/shared/src/routes/portfolio'
import { codeExamplesRoutes } from '@packages/shared/src/routes/code-examples'
import '../styles/tailwind.css';
// import { Button } from '@packages/shared/src/components/Button/Button'
import { Button, Card } from '@packages/shared/src/components/index'
export const App: React.FC = () => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
                    Добро пожаловать!
                </h1>
                <p className="text-lg text-gray-600 mb-8 text-center">
                    Tailwind CSS v3 работает!
                </p>

                {/* Тест кастомного класса */}
                <div className="bg-test mb-6 text-center">
                    Кастомный класс .bg-test с @apply
                </div>

                {/* Тест прямых Tailwind классов */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    <div className="bg-blue-500 text-white p-4 rounded-lg shadow text-center">
                        Синий
                    </div>
                    <div className="bg-green-500 text-white p-4 rounded-lg shadow text-center">
                        Зеленый
                    </div>
                    <div className="bg-purple-500 text-white p-4 rounded-lg shadow text-center">
                        Фиолетовый
                    </div>
                </div>

                {/* Тест ховер-эффектов */}
                <div className="flex gap-4 justify-center mb-8">
                    <Button variant="primary">Основная кнопка</Button>
                    <Button variant="outline">Вторичная кнопка</Button>
                    <button className="btn-secondary">
                        Вторая кнопка
                    </button>
                </div>
                <Card padding="lg">
                    <h1>Мое приложение</h1>
                    <p>Использую общую дизайн-систему</p>
                    <div className="flex gap-4 mt-4">
                        <Button variant="primary">Основная кнопка</Button>
                        <Button variant="outline">Вторичная кнопка</Button>
                    </div>
                </Card>
                {/* Тест карточки */}
                <div className="card mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Тестовая карточка
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Это демонстрация работы Tailwind CSS v3 с кастомными компонентами.
                    </p>
                    <div className="flex gap-2">
                        <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                            Tailwind
                        </span>
                        <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                            v3.3.0
                        </span>
                        <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                            React
                        </span>
                    </div>
                </div>

                {/* Навигация */}
                <div className="flex gap-6 justify-center mb-8">
                    <Link
                        to={portfolioRoutes.about}
                        className="text-blue-600 hover:text-blue-800 font-medium underline decoration-2 underline-offset-4 transition-colors"
                    >
                        ABOUT
                    </Link>
                    <Link
                        to={codeExamplesRoutes.main}
                        className="text-blue-600 hover:text-blue-800 font-medium underline decoration-2 underline-offset-4 transition-colors"
                    >
                        CODE EXAMPLES
                    </Link>
                </div>

                <Outlet />
            </div>
        </div>
    )
}