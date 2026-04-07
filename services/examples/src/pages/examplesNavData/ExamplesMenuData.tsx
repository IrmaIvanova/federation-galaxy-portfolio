// import { Counter } from "@/components/cards/reactCards/ReactCards"
import { CustomLink, Grid, INavMenuItem } from "@packages/shared/src"
import { codeExamplesRoutes } from "@packages/shared/src/routes/code-examples"
import { FC } from "react"
import { Outlet } from "react-router-dom"

export const cardsMenuData: INavMenuItem[] = [
    {
        link: codeExamplesRoutes.cards.react,
        name: "React Core (база, но уверенно)",
        external: false,
    },
    {
        link: codeExamplesRoutes.cards.typescript,
        name: "TypeScript для фронта",
        external: false
    },
    {
        link: codeExamplesRoutes.cards.hooksandrerenders,
        name: "Hooks & ререндеры",
        external: false
    },
    {
        link: codeExamplesRoutes.cards.hooksandrerenders,
        name: "Redux / архитектура",
        external: false
    },
    {
        link: codeExamplesRoutes.cards.webGl,
        name: "WebGL vs Canvas 2D",
        external: false
    },
    {
        link: codeExamplesRoutes.cards.mui,
        name: "UI, MUI, архитектура фронта",
        external: false
    },
    {
        link: codeExamplesRoutes.cards.test,
        name: "Tests",
        external: false
    },

    {
        link: codeExamplesRoutes.cards.async,
        name: "Async + EventLoop",
        external: false
    },
]
export const examplesMenuData: INavMenuItem[] = [
    {
        link: codeExamplesRoutes.main,
        name: 'Пример списка пользователей',
        external: false,
    },

]