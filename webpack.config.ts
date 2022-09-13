import path from 'path';
import webpack from 'webpack';
import { WebpackBuildOptions, WebpackEnv } from './config/webpack/types';
import buildWebpackConfig from './config/webpack/buildWebpackConfig';

const DEFAULT_PORT = 3000;

module.exports = ({ mode, port }: WebpackEnv): webpack.Configuration => {
  const options: WebpackBuildOptions = {
    mode: mode ?? 'development',
    isDev: (mode ?? 'development') === 'development',
    port: port || DEFAULT_PORT,
    paths: {
      src: path.resolve(__dirname, 'src'),
      entry: path.resolve(__dirname, 'src/app/index.tsx'),
      output: path.resolve(__dirname, 'build'),
      static: path.resolve(__dirname, 'public'),
      htmlTemplate: path.resolve(__dirname, 'public/index.html'),
    },
  };

  return buildWebpackConfig(options);
};
