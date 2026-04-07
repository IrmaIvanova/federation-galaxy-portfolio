import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/tailwind.css';
import { useLocation } from 'react-router-dom';
// import { Button } from '@packages/shared/src/components/Button/Button'
import { Section } from '@packages/shared/src'
import { FlatSolarSystem } from './GalaxyHero/SvgGalaxy';
import { NavMenu } from "@packages/shared/src";
import { navMenuData } from './NavMenu/navMenuData';





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

      <Section as="div" background="muted" padding="none" >
        <Outlet />
      </Section>

    </>
  )
}
