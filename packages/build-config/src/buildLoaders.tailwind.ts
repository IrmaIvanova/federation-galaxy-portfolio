import { ModuleOptions } from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from './types/types';
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoadersWithTailwind(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';

    const assetsLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/[hash][ext][query]'
        }
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{
            loader: '@svgr/webpack', 
            options: {
                icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: { currentColor: true }
                        }
                    ]
                }
            }
        }],
    };

    // PostCSS loader для Tailwind v3
    const postcssLoader = {
        loader: "postcss-loader",
        options: {
            postcssOptions: {
                plugins: [
                    ["tailwindcss"],
                    ["autoprefixer"]
                ],
            },
        },
    };

    const cssLoader = {
        test: /\.css$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            postcssLoader,
        ],
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            postcssLoader,
            'sass-loader',
        ],
    };

    const tsLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                    transpileOnly: true
                }
            }
        ]
    };

    return [
        assetsLoader,
        svgLoader,
        cssLoader,
        scssLoader,
        tsLoader,
    ];
}