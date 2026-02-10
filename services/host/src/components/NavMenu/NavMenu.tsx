import React from 'react'
import { CustomLink, Container, ThemeToggle } from '@packages/shared/src'
import { NavMenuProps } from './NavMenu.interface'


export const NavMenu: React.FC<NavMenuProps> = ({
    options = [],
    themeBTN = false
}) => {

    const isClient = typeof window !== 'undefined';

    const currentPath = isClient ? location.pathname : '';
    return (

        <Container size="lg" padding="sm">
            <div className="flex gap-6 justify-center items-center flex-wrap">
                {
                    options.map(({ name, link, external }) => {
                        return <CustomLink
                            key={link}
                            to={link}
                            nav={!external && currentPath === link}
                            variant='primary'
                            size='lg'
                            external={external}
                        >
                            {name}
                        </CustomLink>
                    })
                }
                {themeBTN && <ThemeToggle />}
            </div>
        </Container>

    )
}