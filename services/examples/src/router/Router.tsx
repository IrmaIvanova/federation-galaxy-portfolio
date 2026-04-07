import { App } from "@/components/App";
import { HooksAndRerendersCards } from "@/components/cards/InfoCards/RerenderCards";
import { AsyncCard } from "@/components/cards/InfoCards/EventLoopCards";
import { CardsReact } from "@/components/cards/InfoCards/ReactCards";
import { ReduxCards } from "@/components/cards/InfoCards/ReduxCards";
import { TestCard } from "@/components/cards/InfoCards/TestCards";
import { TypeScriptCard } from "@/components/cards/InfoCards/TypescriptCards";
import { MuiCard } from "@/components/cards/InfoCards/UIMUICards";
import { WebGLCard } from "@/components/cards/InfoCards/WebGL";
// import { Cards } from "@/pages/examplesNavData/Cards";
import { UserList } from "@/pages/usersList/UsersList";
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
            // {
            //     path: "cards",
            //     element: <Suspense fallback={"Loading..."}>
            //         <Cards />
            //     </Suspense>,

            // },
            {
                path: "cards/react",
                element: <Suspense fallback={"Loading..."}>
                    <CardsReact />
                </Suspense>,

            },
            {
                path: "cards/typescript",
                element: <Suspense fallback={"Loading..."}>
                    <TypeScriptCard />
                </Suspense>,

            },
            {
                path: "cards/hooksandrerenders",
                element: <Suspense fallback={"Loading..."}>
                    <HooksAndRerendersCards />
                </Suspense>,

            },
            {
                path: "cards/redux",
                element: <Suspense fallback={"Loading..."}>
                    <ReduxCards />
                </Suspense>,

            },
            {
                path: "cards/webGL",
                element: <Suspense fallback={"Loading..."}>
                    <WebGLCard />
                </Suspense>,

            },
            {
                path: "cards/mui",
                element: <Suspense fallback={"Loading..."}>
                    <MuiCard />
                </Suspense>,

            },
            {
                path: "cards/test",
                element: <Suspense fallback={"Loading..."}>
                    <TestCard />
                </Suspense>,

            },
            {
                path: "cards/async",
                element: <Suspense fallback={"Loading..."}>
                    <AsyncCard />
                </Suspense>,

            }

        ]
    }
]


export const router = createBrowserRouter(routes);

export default routes;