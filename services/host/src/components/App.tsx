import React from 'react';
import { Outlet } from 'react-router-dom';
import { portfolioRoutes } from '@packages/shared/src/routes/portfolio'
import { codeExamplesRoutes } from '@packages/shared/src/routes/code-examples'
import '../styles/tailwind.css';
import { useLocation } from 'react-router-dom';
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
  useTheme,
  CustomLink,
} from '@packages/shared/src'




export const App: React.FC = () => {
  let location = useLocation()
  console.log("loc", location)

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
        <CustomLink
          to={portfolioRoutes.about}
          nav={location.pathname === portfolioRoutes.about}
          variant='primary'>

          Portfolio
        </CustomLink>
        <CustomLink
          variant='primary'
          to={codeExamplesRoutes.main}
          nav={location.pathname === codeExamplesRoutes.main}

        >
          CODE EXAMPLES
        </CustomLink>
        <CustomLink
          variant='primary'
          to={"/customStoryBook"}
          nav={location.pathname === "/customStoryBook"}
        >
          Design System Preview
        </CustomLink>
        <CustomLink
          variant='primary'
          to={"https://github.com/IrmaIvanova/federation-galaxy-portfolio"}
          external>
          GitHub
        </CustomLink>
      </div>

      <Outlet />



    </Section >
  )
}