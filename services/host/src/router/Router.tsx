import { App } from "@/components/App";
import { createBrowserRouter } from "react-router-dom";
// @ts-ignore
import codeExamplesRoutes from 'examples/Router';
// @ts-ignore
import portfolioRoutes from 'portfolio/Router';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            ...codeExamplesRoutes,
            ...portfolioRoutes
        ]
    },
]);

