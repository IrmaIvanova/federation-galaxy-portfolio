import { App } from "@/components/App";
import { LazyAbout } from "@/pages/about/About.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@packages/shared/src';

const routes = [
    {
        path: "/portfolio",
        element: <ThemeProvider defaultTheme="system" storageKey="my-app-theme">
            <App />

        </ThemeProvider>,
        children: [

            {
                path: "/portfolio/about",
                element: <Suspense fallback={"Loading..."}>
                    <LazyAbout />

                </Suspense>,
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;