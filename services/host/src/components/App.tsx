import React from 'react';
import { Outlet } from 'react-router-dom';
import { portfolioRoutes } from '@packages/shared/src/routes/portfolio'
import { codeExamplesRoutes } from '@packages/shared/src/routes/code-examples'
import '../styles/tailwind.css';
import { useLocation } from 'react-router-dom';
// import { Button } from '@packages/shared/src/components/Button/Button'
import { Section } from '@packages/shared/src'
import { FlatSolarSystem } from './GalaxyHero/SvgGalaxy';

import { navMenuData } from './NavMenu/navMenuData';
import { NavMenu } from './NavMenu/NavMenu';




export const App: React.FC = () => {
  let location = useLocation()

  return (
    <>
      <Section as="div" background="muted" >
        <NavMenu options={navMenuData} themeBTN={true} />
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
