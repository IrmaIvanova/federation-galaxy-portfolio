import webpack from 'webpack';
import path from 'path';
import { BuildPaths, Mode, Platform, buildWebpack } from '@packages/build-config';
import packageJson from './package.json';

interface EnvVariables {
    mode?: Mode;
    port?: number;
    analyzer?: boolean;
    platform?: Platform;
    CODE_EXAMPLES_REMOTE_URL?: string;
    PORTFOLIO_REMOTE_URL?: string;
}

export default (env: EnvVariables) => {

    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, "src", 'index.tsx'),
        html: path.resolve(__dirname, "public", 'index.html'),
        public: path.resolve(__dirname, "public"),
        src: path.resolve(__dirname, 'src')
    }
    const CODE_EXAMPLES_REMOTE_URL = env.CODE_EXAMPLES_REMOTE_URL ?? 'http://localhost:3001';
    const PORTFOLIO_REMOTE_URL = env.PORTFOLIO_REMOTE_URL ?? 'http://localhost:3002';

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths: paths,
        analyzer: env.analyzer,
        platform: env.platform ?? "desktop",


    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',

        remotes: {
            examples: `examples@${CODE_EXAMPLES_REMOTE_URL}/remoteEntry.js`,
            portfolio: `portfolio@${PORTFOLIO_REMOTE_URL}/remoteEntry.js`,
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true,
                // requiredVersion: packageJson.dependencies['react'],
            },
            'react-router-dom': {
                eager: true,
                // requiredVersion: packageJson.dependencies['react-router-dom'],
            },
            'react-dom': {
                eager: true,
                // requiredVersion: packageJson.dependencies['react-dom'],
            },
        },
    }))
    return config;
}