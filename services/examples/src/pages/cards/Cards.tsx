import { CustomLink } from "@packages/shared/src"
import { codeExamplesRoutes } from "@packages/shared/src/routes/code-examples"
import { FC } from "react"
import { Outlet } from "react-router-dom"

export const Cards: FC = ({ }) => {
    return (
        <div>
            <CustomLink to={codeExamplesRoutes.cards.react} children={"React Core (база, но уверенно)"} />
            <Outlet />
        </div>
    )
}

