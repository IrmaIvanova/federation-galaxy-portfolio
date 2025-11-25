import { BuildOptions } from '../types/types'
import { removeDataTestBabelPlugin } from './removeDataTestBabelPlugin'
export function buildBabelLoader({ mode }: BuildOptions) {
    const isDev = mode === 'development';
    const isProd = mode === 'production';
    const plugins = []

    const plaginRemoveDataTestId = [
        removeDataTestBabelPlugin,
        {
            props: [
                'data-testid'
            ]
        }
    ]

    if (isProd) {
        plugins.push(plaginRemoveDataTestId)
    }
    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    '@babel/preset-env',
                    "@babel/preset-typescript",
                    [
                        "@babel/preset-react",
                        {
                            runtime: isDev ? 'automatic' : 'classic',
                        }
                    ]
                ],
                plugins: plugins.length ? plugins : undefined

            }
        }
    }
}