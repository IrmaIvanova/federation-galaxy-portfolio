import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { portfolioRoutes } from '@packages/shared/src/routes/portfolio'
import { codeExamplesRoutes } from '@packages/shared/src/routes/code-examples'
import '../styles/tailwind.css';
// import { Button } from '@packages/shared/src/components/Button/Button'
import {
  Button,
  Card,
  cn,
  Container,
  ThemeToggle,
  Grid,
  GridItem,
  Section,
  useTheme
} from '@packages/shared/src'




export const App: React.FC = () => {



  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
    <Section as="div" background="muted" className="rounded-lg" >
      <Container size="lg" padding="sm">
        <ThemeToggle />
      </Container>

      <Container size="lg" padding="sm">

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
      </Container>
      <Grid cols={1} md={2} lg={3} gap="md" className="mb-8">
        <Container size="lg" padding="lg">
          {/* Тест ховер-эффектов */}

          <Card padding="sm">
            <h1>Мое приложение</h1>
            <p>Использую общую дизайн-систему</p>
            <div className="flex gap-4 mt-4">
              <Button variant="primary">Основная кнопка</Button>
              <Button variant="outline">Вторичная кнопка</Button>
            </div>
          </Card>



        </Container>

        <Container size="lg" padding="lg">
          {/* Тест ховер-эффектов */}

          <div className="flex gap-4 justify-center mb-8">
            <Button variant="primary">Основная кнопка</Button>
            <Button variant="outline">Вторичная кнопка</Button>
            <button className="btn-secondary">
              Вторая кнопка
            </button>
          </div>


        </Container>
        <Container size="lg" padding="lg">
          {/* Тест ховер-эффектов */}

          в разработке


        </Container>

  

      </Grid>

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
      {/* // Более сложный пример с GridItem */}
      <Grid cols={1} md={3} lg={4} gap="lg">
        <GridItem span={1} md={2} lg={3}>
          <div>Широкий элемент</div>
        </GridItem>
        <GridItem span={1} md={1} lg={1}>
          <div>Узкий элемент</div>
        </GridItem>
      </Grid>

      {/* // Как список */}
      <Grid as="ul" cols={1} sm={2} md={3} gap="sm">
        <GridItem as="li">Пункт 1</GridItem>
        <GridItem as="li">Пункт 2</GridItem>
        <GridItem as="li">Пункт 3</GridItem>
      </Grid>


    </Section >
  )
}