import { codeExamplesRoutes } from "@packages/shared/src/routes/code-examples";
import { portfolioRoutes } from "@packages/shared/src/routes/portfolio";

interface PlanetData {
    id: string;
    name: string;
    color: {
        light: string;
        dark: string;
    };
    radius: number;
    orbitRadius: number;
    description: string;
    element: React.ReactNode;
    link?: string
}
export const planetsData: PlanetData[] = [
    {
        id: 'mercury',
        name: 'Меркурий',
        color: { light: '#bdbdbd', dark: '#d4d4d4' },
        radius: 10,
        orbitRadius: 60,
        description: 'Ближайшая к Солнцу планета',
        element: <g transform="translate(960,350)">
            <circle
                r="10"
                className="fill-light-gray-400 dark:fill-dark-gray-400 transition-colors duration-300"
            />
        </g>
    },
    {
        id: 'venus',
        name: 'Венера',
        color: { light: '#e18a3f', dark: '#f0a95f' },
        radius: 16,
        orbitRadius: 110,
        description: 'Самая горячая планета',
        element: <g transform="translate(900,350)">
            <g transform="translate(110, -12)">
                <circle
                    r="16"
                    className="fill-[#e18a3f] dark:fill-[#f0a95f] transition-colors duration-300"
                />
            </g>
        </g>
    },
    {
        id: 'earth',
        name: 'Земля',
        color: { light: '#0b6ad6', dark: '#3aa0ff' },
        radius: 22,
        orbitRadius: 160,
        description: 'Наш дом во Вселенной',
        element: (
            <g transform="translate(900,350)">
                <g transform="translate(-150, -20)">
                    <defs>
                        <path
                            id="earth-text-path"
                            d="
            M 0,0
            m -26,0
            a 26,26 0 1,1 52,0
            a 26,26 0 1,1 -52,0
          "
                        />
                    </defs>

                    {/* Планета — СТАТИЧНА */}
                    <circle r="22" fill="url(#earth-grad)" />

                    {/* 👇 ВАЖНО: отдельный g ТОЛЬКО для текста */}
                    <g pointerEvents="none">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 0 0"
                            to="360 0 0"
                            dur="12s"
                            repeatCount="indefinite"
                        />

                        <text
                            fontSize="16"
                            fontWeight="600"
                            className="fill-[#2f9c3a] dark:fill-[#bf5100]"
                        >
                            <textPath
                                href="#earth-text-path"
                                startOffset="50%"
                                textAnchor="middle"
                            >
                                Portfolio
                            </textPath>
                        </text>
                    </g>
                </g>
            </g>
        ),

        // element: <g transform="translate(900,350)">
        //     <g transform="translate(-150, -20)">

        //         <circle r="22" fill="url(#earth-grad)" />
        //         <path
        //             d="M -8 -6 q 5 -8 14 -5 q -2 6 -9 10 q -7 3 -5 1 z"
        //             className="fill-[#2f9c3a] dark:fill-[#48bb78] transition-colors duration-300"
        //             transform="scale(0.9)"
        //         />
        //         <text x="-40" y="0" className="fill-[#2f9c3a] dark:fill-[#bf5100] transition-colors duration-300">Portfolio </text>


        //     </g>
        // </g>,
        link: portfolioRoutes.about
    },
    {
        id: 'mars',
        name: 'Марс',
        color: { light: '#b53232', dark: '#e74c3c' },
        radius: 14,
        orbitRadius: 210,
        description: 'Красная планета',
        element: <g transform="translate(900,350)">
            <g transform="translate(-60, 60)">
                <circle
                    r="14"
                    className="fill-[#b53232] dark:fill-[#e74c3c] transition-colors duration-300"
                />
            </g>
        </g>
    },
    {
        id: 'jupiter',
        name: 'Юпитер',
        color: { light: '#f0a95f', dark: '#ffca51' },
        radius: 48,
        orbitRadius: 280,
        description: 'Газовый гигант',
        element: <g transform="translate(900,350)">
            <g transform="translate(340, -120)">
                <defs>
                    <path
                        id="jupiter-text-path"
                        d="
      M 0,0
      m -56,0
      a 56,56 0 1,1 112,0
      a 56,56 0 1,1 -112,0
    "
                    />
                </defs>

                <circle
                    r="48"
                    className="fill-[#f0a95f] dark:fill-[#ffca51] transition-colors duration-300"
                />
                <g className="opacity-95" transform="scale(1,0.35)">
                    <ellipse
                        cx="0"
                        cy="0"
                        rx="48"
                        ry="6"
                        className="fill-[#e08b3e] dark:fill-[#ffb347] transition-colors duration-300"
                    />
                </g>

                <g pointerEvents="none">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 0 0"
                        to="360 0 0"
                        dur="12s"
                        repeatCount="indefinite"
                    />

                    <text fontSize="22" fontWeight="600" className="fill-[#2f9c3a] dark:fill-[#bf5100]">
                        <textPath
                            href="#jupiter-text-path"
                            startOffset="50%"
                            textAnchor="middle"
                        >
                            Code Examples
                        </textPath>
                    </text>
                </g>
            </g>
        </g>,
        link: codeExamplesRoutes.main
    },
    {
        id: 'saturn',
        name: 'Сатурн',
        color: { light: '#c8d3a8', dark: '#e6b67d' },
        radius: 40,
        orbitRadius: 360,
        description: 'Властелин колец',
        element: <g transform="translate(900,350)">
            <g transform="translate(-440, -60)">
                <defs>
                    <path
                        id="saturn-text-path"
                        d="
      M 0,0
      m -50,0
      a 50,50 0 1,1 100,0
      a 50,50 0 1,1 -100,0
    "
                    />
                </defs>
                <circle
                    r="40"
                    fill='url(#saturn-grad)'
                />

                {/* <text x="-80" y="0" font-size="20px" font-weight="bold" className="fill-[#2f9c3a] dark:fill-[#701a75] transition-colors duration-300">Design System </text> */}
                <g pointerEvents="none">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 0 0"
                        to="360 0 0"
                        dur="12s"
                        repeatCount="indefinite"
                    />

                    <text fontSize="22" fontWeight="600" className="fill-[#2f9c3a] dark:fill-[#bf5100]">
                        <textPath
                            href="#saturn-text-path"
                            startOffset="50%"
                            textAnchor="middle"
                        >
                            Design System
                        </textPath>
                    </text>
                </g>
            </g>
        </g>,
        link: "/customStoryBook"
    },
    {
        id: 'neptune',
        name: 'Нептун',
        color: { light: '#1aa6a8', dark: '#2dc9d0' },
        radius: 30,
        orbitRadius: 460,
        description: 'Ледяной гигант',
        element: <g transform="translate(900,350)">
            <g transform="translate(500, 30)">
                <defs>
                    <path
                        id="neptune-text-path"
                        d="
      M 0,0
      m -38,0
      a 38,38 0 1,1 76,0
      a 38,38 0 1,1 -76,0
    "
                    />
                </defs>
                <circle
                    r="30"
                    fill='url(#neptune-grad)'
                />
                {/* <text x="-30" y="0" className="fill-[#2f9c3a] dark:fill-[#bf5100] transition-colors duration-300">GitHub </text> */}
                <g pointerEvents="none">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 0 0"
                        to="360 0 0"
                        dur="12s"
                        repeatCount="indefinite"
                    />

                    <text fontSize="22" fontWeight="600" className="fill-[#2f9c3a] dark:fill-[#bf5100]">
                        <textPath
                            href="#neptune-text-path"
                            startOffset="50%"
                            textAnchor="middle"
                        >
                            GitHub
                        </textPath>
                    </text>
                </g>
            </g>

        </g>,
        link: "https://github.com/IrmaIvanova/federation-galaxy-portfolio"
    },
];