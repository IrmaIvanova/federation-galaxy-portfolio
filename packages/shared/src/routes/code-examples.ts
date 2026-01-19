// paths.ts
export const CODE_EXAMPLES_BASE = '/code-examples';

export const codeExamplesRoutes = {
    main: `${CODE_EXAMPLES_BASE}/main`,
    cards: {
        base: `${CODE_EXAMPLES_BASE}/cards`,
        react: `${CODE_EXAMPLES_BASE}/cards/react`,
        typescript: `${CODE_EXAMPLES_BASE}/cards/typescript`,
        hooksandrerenders: `${CODE_EXAMPLES_BASE}/cards/hooksandrerenders`,
        redux: `${CODE_EXAMPLES_BASE}/cards/redux`,
        webGl: `${CODE_EXAMPLES_BASE}/cards/webGL`,
        mui: `${CODE_EXAMPLES_BASE}/cards/mui`,
        test: `${CODE_EXAMPLES_BASE}/cards/test`,
        async: `${CODE_EXAMPLES_BASE}/cards/async`,
        // Динамические пути
        detail: (id: string) => `${CODE_EXAMPLES_BASE}/cards/${id}`,
    },
    // Другие разделы
    users: {
        base: `${CODE_EXAMPLES_BASE}/users`,
        detail: (id: string) => `${CODE_EXAMPLES_BASE}/users/${id}`,
    }
} as const;

// export const codeExamplesRoutes = {
//     main: '/code-examples/main',
//     cards: '/code-examples/cards',
//     reactCards: '/code-examples/cards/react'
// }