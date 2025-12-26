import { App } from "@/components/App";
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
                path: "/code-examples/main",
                element: <Suspense fallback={"Loading..."}>
                    <UserList />


                </Suspense>,

            },
            {
                path: "/code-examples/second",
                element: <Suspense fallback={"Loading..."}>
                    <div>
                        <h1> Kukaracha 12345</h1>
                    </div>
                </Suspense>,

            }
        ]
    }
]


export const router = createBrowserRouter(routes);

export default routes;