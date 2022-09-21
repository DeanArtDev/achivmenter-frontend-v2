import { WebpackBuildOptions } from './types';
import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

const buildLoaders = ({ isDev, paths }: WebpackBuildOptions): RuleSetRule[] => {
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    include: paths.src,
    use: [
      {
        loader: 'ts-loader',
        options: {
          configFile: isDev ? 'tsconfig.dev.json' : 'tsconfig.json',
          transpileOnly: isDev,
          ...(isDev && {
            getCustomTransformers: () => ({
              before: [ReactRefreshTypeScript()],
            }),
          }),
        },
      },
    ],
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
            exportLocalsConvention: 'camelCase',
          },
        },
      },
      { loader: 'sass-loader', options: { sourceMap: isDev } },
    ],
  };

  return [typescriptLoader, scssLoader];
};

export default buildLoaders;
