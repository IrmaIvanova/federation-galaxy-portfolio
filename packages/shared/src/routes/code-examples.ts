// paths.ts
export const CODE_EXAMPLES_BASE = '/code-examples';

export const codeExamplesRoutes = {
    main: `${CODE_EXAMPLES_BASE}/main`,
    cards: {
        base: `${CODE_EXAMPLES_BASE}/cards`,
        react: `${CODE_EXAMPLES_BASE}/cards/react`,
        vue: `${CODE_EXAMPLES_BASE}/cards/vue`,
        angular: `${CODE_EXAMPLES_BASE}/cards/angular`,
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