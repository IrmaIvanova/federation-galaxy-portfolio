import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {

    return {
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true,
        // Hot Module Replacement - это механизм, 
        // который позволяет Webpack обновлять части кода (модули) в запущенном приложении без перезагрузки страницы.
        hot: true
    }
}