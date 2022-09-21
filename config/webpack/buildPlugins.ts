import webpack, { Configuration } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { WebpackBuildOptions } from './types';

const buildPlugins = ({ paths, isDev }: WebpackBuildOptions): Configuration['plugins'] => {
  const pluginsList: Configuration['plugins'] = [
    new HTMLWebpackPlugin({ template: paths.htmlTemplate }),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      TEST_VAR: JSON.stringify('TEST_VAR'),
    }),
  ];

  if (!isDev) {
    pluginsList.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[id].[name].[contenthash:8].css',
      })
    );
  }

  if (isDev) {
    pluginsList.push(new ReactRefreshWebpackPlugin());
  }

  return pluginsList;
};

export default buildPlugins;
