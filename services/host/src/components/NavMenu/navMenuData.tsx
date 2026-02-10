import { codeExamplesRoutes } from '@packages/shared/src/routes/code-examples'
import { portfolioRoutes } from '@packages/shared/src/routes/portfolio'
import { INavMenuItem } from './NavMenu.interface'

export const navMenuData: INavMenuItem[] = [
    {
        link: portfolioRoutes.about,
        name: "Portfolio",
        external: false
    },
    {
        link: codeExamplesRoutes.main,
        name: "CODE EXAMPLES",
        external: false
    },
    {
        link: "/customStoryBook",
        name: "Design System Preview",
        external: false
    },
    {
        link: "https://github.com/IrmaIvanova/federation-galaxy-portfolio",
        name: "GitHub",
        external: true
    },

]