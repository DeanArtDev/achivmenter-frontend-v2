import { ResolveOptions } from 'webpack';
import { WebpackBuildOptions } from './types';

const buildResolve = (options: WebpackBuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
};

export default buildResolve;
