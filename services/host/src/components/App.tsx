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
import { NavMenu } from './NavMenu/NavMenu';
import { navMenuData } from './NavMenu/navMenuData';




export const App: React.FC = () => {
  let location = useLocation()

  return (
    <>
      <Section as="div" background="muted" >
        <NavMenu options={navMenuData} themeBTN />
      </Section >

      <Section as="div" padding='none' background='default'>
        <FlatSolarSystem />
      </Section>

      <Section as="div" background="muted"  >
        <Outlet />
      </Section>

    </>
  )
}
