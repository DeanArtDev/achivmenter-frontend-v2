import { ResolveOptions } from 'webpack';
import { WebpackBuildOptions } from './types';

const buildResolve = ({ paths }: WebpackBuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@app': paths.app,
      '@processes': paths.processes,
      '@pages': paths.pages,
      '@features': paths.features,
      '@widgets': paths.widgets,
      '@entities': paths.entities,
      '@shared': paths.shared,
    },
  };
};

export default buildResolve;
