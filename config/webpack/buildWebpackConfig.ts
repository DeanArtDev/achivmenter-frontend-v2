import {WebpackBuildOptions} from "./types";
import webpack from "webpack";
import buildDevServer from "./buildDevServer";
import buildRules from "./buildRules";
import buildResolve from "./buildResolve";
import buildPlugins from "./buildPlugins";

const buildWebpackConfig = (options: WebpackBuildOptions): webpack.Configuration => {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: "[name].[contenthash].bundle.js",
      clean: true,
    },
    devServer: options.isDev ? buildDevServer(options) : undefined,
    module: {
      rules: buildRules(options),
    },
    resolve: buildResolve(),
    plugins: buildPlugins(options),
  }
}

export default buildWebpackConfig;