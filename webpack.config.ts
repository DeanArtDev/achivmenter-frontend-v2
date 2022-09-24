import path from 'path';
import webpack from 'webpack';
import { WebpackBuildOptions, WebpackEnv } from './configs/webpack/types';
import buildWebpackConfig from './configs/webpack/buildWebpackConfig';

const DEFAULT_PORT = 3000;

module.exports = ({ mode, port }: WebpackEnv): webpack.Configuration => {
  const options: WebpackBuildOptions = {
    mode: mode ?? 'development',
    isDev: (mode ?? 'development') === 'development',
    port: port || DEFAULT_PORT,
    paths: {
      root: path.resolve(__dirname),
      src: path.resolve(__dirname, 'src'),
      configs: {
        ts: path.resolve(__dirname, 'configs/typescript')
      },
      entry: path.resolve(__dirname, 'src/app/index.tsx'),
      output: path.resolve(__dirname, 'build'),
      static: path.resolve(__dirname, 'public'),
      htmlTemplate: path.resolve(__dirname, 'public/index.html'),
      app: path.resolve(__dirname, 'src/app/'),
      processes: path.resolve(__dirname, 'src/processes/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      widgets: path.resolve(__dirname, 'src/widgets/'),
      features: path.resolve(__dirname, 'src/features/'),
      entities: path.resolve(__dirname, 'src/entities/'),
      shared: path.resolve(__dirname, 'src/shared/')
    }
  };

  return buildWebpackConfig(options);
};
