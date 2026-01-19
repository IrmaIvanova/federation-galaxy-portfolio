// import { Counter } from "@/components/cards/reactCards/ReactCards"
import { CustomLink, Grid } from "@packages/shared/src"
import { codeExamplesRoutes } from "@packages/shared/src/routes/code-examples"
import { FC } from "react"
import { Outlet } from "react-router-dom"

export const Cards: FC = ({ }) => {
    return (
        <div>
            <Grid cols={1} md={2} lg={3} gap="md" >

                <div><CustomLink to={codeExamplesRoutes.cards.react} variant='primary' nav children={"React Core (база, но уверенно)"} /></div>
                <div><CustomLink to={codeExamplesRoutes.cards.typescript} variant='primary' nav children={"TypeScript для фронта"} /></div>
                <div><CustomLink to={codeExamplesRoutes.cards.hooksandrerenders} variant='primary' nav children={"Hooks & ререндеры"} /></div>
                <div><CustomLink to={codeExamplesRoutes.cards.redux} variant='primary' nav children={"Redux / архитектура"} /></div>
                <div><CustomLink to={codeExamplesRoutes.cards.webGl} variant='primary' nav children={"WebGL vs Canvas 2D"} /></div>
                <div><CustomLink to={codeExamplesRoutes.cards.mui} variant='primary' nav children={" UI, MUI, архитектура фронта"} /></div>
                <div><CustomLink to={codeExamplesRoutes.cards.test} variant='primary' nav children={" Tests"} /></div>
                <div><CustomLink to={codeExamplesRoutes.cards.async} variant='primary' nav children={"Async + EventLoop"} /></div>
            </Grid>
            {/* <Counter/> */}
            {/* <Outlet /> */}
        </div>
    )
}

