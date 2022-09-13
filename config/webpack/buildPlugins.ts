import { Configuration } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackBuildOptions } from './types';

const buildPlugins = ({ paths, isDev }: WebpackBuildOptions): Configuration['plugins'] => {
  const pluginsList: Configuration['plugins'] = [new HTMLWebpackPlugin({ template: paths.htmlTemplate })];

  if (!isDev)
    pluginsList.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[id].[name].[contenthash:8].css',
      })
    );

  return pluginsList;
};

export default buildPlugins;
