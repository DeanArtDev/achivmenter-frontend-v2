import webpack, { Configuration } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { WebpackBuildOptions } from './types';

const buildPlugins = ({ paths, isDev }: WebpackBuildOptions): Configuration['plugins'] => {
  const pluginsList: Configuration['plugins'] = [
    new HTMLWebpackPlugin({ template: paths.htmlTemplate }),
    new ForkTsCheckerWebpackPlugin({
      typescript: { configFile: `${paths.configs.ts}/tsconfig.json` }
    }),
    new webpack.DefinePlugin({
      TEST_VAR: JSON.stringify('TEST_VAR')
    })
  ];

  if (!isDev) {
    pluginsList.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[id].[name].[contenthash:8].css'
      })
    );
  }
  if (isDev) {
    pluginsList.push(new ReactRefreshWebpackPlugin());
    pluginsList.push(new ESLintPlugin({
      context: paths.root,
      files: ['src/**/*.ts', 'src/**/*.tsx', 'config/**/*.ts'],
      extensions: ['ts', 'tsx', 'js'],
      threads: 1
    }));
  }

  return pluginsList;
};

export default buildPlugins;
