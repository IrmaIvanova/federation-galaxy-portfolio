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
import { FlatSolarSystem } from './GalaxyHero/SvgGalaxy';




export const App: React.FC = () => {
  let location = useLocation()
  console.log("loc", location)

  return (
    <>
      <Section as="div" background="muted" >

        <Container size="lg" padding="sm">
          <ThemeToggle />
        </Container>
      </Section >
      <Section as="div" padding='none' background='default'>
        <FlatSolarSystem />
      </Section>

      {/* Навигация */}
      {/*  */}
      <Section as="div" background="muted"  >

        <Container size="lg" padding="sm">
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
        </Container>
      </Section>
      {/* </div> */}

      <Section as="div" background="muted"  >

        {/* <Container size="lg" padding="sm"> */}
          <Outlet />
        {/* </Container> */}
      </Section>




    </>
  )
}
