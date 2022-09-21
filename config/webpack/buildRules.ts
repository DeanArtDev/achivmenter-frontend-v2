import { WebpackBuildOptions } from './types';
import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const buildLoaders = ({ isDev }: WebpackBuildOptions): RuleSetRule[] => {
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: isDev,
          modules: {
            auto: (resourcePath: string) => resourcePath.includes('.module.'),
            localIdentName: '[local]--[hash:base64:3]',
            exportLocalsConvention: "camelCase",
          },
        },
      },
      { loader: 'sass-loader', options: { sourceMap: isDev } },
    ],
  };

  return [typescriptLoader, scssLoader];
};

export default buildLoaders;
