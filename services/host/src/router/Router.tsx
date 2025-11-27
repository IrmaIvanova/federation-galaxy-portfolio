import { App } from "@/components/App";
import { createBrowserRouter } from "react-router-dom";
// @ts-ignore
import codeExamplesRoutes from 'examples/Router';
// @ts-ignore
import portfolioRoutes from 'portfolio/Router';
import { ThemeProvider } from '@packages/shared/src';



export const router = createBrowserRouter([
    {
        path: "/",
        element: <ThemeProvider defaultTheme="system" storageKey="my-app-theme">
            <App />
        </ThemeProvider>,
        children: [
            ...codeExamplesRoutes,
            ...portfolioRoutes
        ]
    },
]);

