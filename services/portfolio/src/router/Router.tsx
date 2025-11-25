import { App } from "@/components/App";
import { LazyAbout } from "@/pages/about/About.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { UserCard } from '@packages/shared/src/components/UserCard'

const routes = [
    {
        path: "/portfolio",
        element: <App />,
        children: [

            {
                path: "/portfolio/about",
                element: <Suspense fallback={"Loading..."}>
                    <LazyAbout />
                    <UserCard userName={"FrogShop"} />

                </Suspense>,
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;