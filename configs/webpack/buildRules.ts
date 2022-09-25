import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { WebpackBuildOptions } from './types';

const buildLoaders = ({ isDev, paths }: WebpackBuildOptions): RuleSetRule[] => {
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    include: paths.src,
    use: [
      {
        loader: 'ts-loader',
        options: {
          configFile: isDev ? `${paths.configs.ts}/tsconfig.dev.json` : `${paths.root}/tsconfig.json`,
          transpileOnly: isDev,
          ...(isDev && {
            getCustomTransformers: () => ({
              before: [ReactRefreshTypeScript()]
            })
          })
        }
      }
    ]
  };

  const svgLoader: RuleSetRule = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  };

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|webp|woff2|woff|ttf|eot)$/i,
    type: 'asset/resource'
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
            exportLocalsConvention: 'camelCase'
          }
        }
      },
      { loader: 'sass-loader', options: { sourceMap: isDev } }
    ]
  };

  return [scssLoader, svgLoader, fileLoader, typescriptLoader];
};

export default buildLoaders;
