import { App } from "@/components/App";
import { CardsReact } from "@/components/cards/reactCards/ReactCards";
import { Cards } from "@/pages/cards/Cards";
import UserList from "@/pages/usersList/UsersList";
import { ThemeProvider } from "@packages/shared/src";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
    {
        path: '/code-examples',
        element: <ThemeProvider defaultTheme="system" storageKey="my-app-theme">
            <App />

        </ThemeProvider>,
        children: [
            {
                path: "main",
                element: <Suspense fallback={"Loading..."}>
                    <UserList />


                </Suspense>,

            },
            {
                path: "cards",
                element: <Suspense fallback={"Loading..."}>
                    <Cards />
                </Suspense>,

            }, 
            {
                path: "cards/react",
                element: <Suspense fallback={"Loading..."}>
                   <CardsReact/>
                </Suspense>,

            }
            // {
            //     path: "/code-examples/main",
            //     element: <Suspense fallback={"Loading..."}>
            //         <UserList />


            //     </Suspense>,

            // },
            // {
            //     path: "/code-examples/cards",
            //     element: <Suspense fallback={"Loading..."}>
            //         <Cards />
            //     </Suspense>,

            // }, 
            // {
            //     path: "/code-examples/cards/react",
            //     element: <Suspense fallback={"Loading..."}>
            //        <CardsReact/>
            //     </Suspense>,

            // }
        ]
    }
]


export const router = createBrowserRouter(routes);

export default routes;