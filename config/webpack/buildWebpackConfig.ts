import { WebpackBuildOptions } from './types';
import { Configuration } from 'webpack';
import buildDevServer from './buildDevServer';
import buildRules from './buildRules';
import buildResolve from './buildResolve';
import buildPlugins from './buildPlugins';

const buildWebpackConfig = (options: WebpackBuildOptions): Configuration => {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: '[name].[contenthash].bundle.js',
      clean: true,
    },
    devServer: options.isDev ? buildDevServer(options) : undefined,
    devtool: options.isDev ? 'inline-source-map' : undefined,
    module: {
      rules: buildRules(options),
    },
    resolve: buildResolve(options),
    plugins: buildPlugins(options),
  };
};

export default buildWebpackConfig;
