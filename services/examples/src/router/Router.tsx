import { App } from "@/components/App";
import { Shop } from "@/pages/shop";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { UserCard } from '@packages/shared/src/components/UserCard'
const routes = [
    {
        path: '/code-examples',
        element: <App />,
        children: [
            {
                path: "/code-examples/main",
                element: <Suspense fallback={"Loading..."}>
                    <Shop />
                </Suspense>,

            },
            {
                path: "/code-examples/second",
                element: <Suspense fallback={"Loading..."}>
                    <div>
                        <h1> Kukaracha</h1>
                        <UserCard userName={"FrogShop"} />
                    </div>
                </Suspense>,

            }
        ]
    }
]


export const router = createBrowserRouter(routes);

export default routes;