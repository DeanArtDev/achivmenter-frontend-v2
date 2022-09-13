import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import {WebpackBuildOptions} from "./types";

const buildDevServer = ({ paths, port }: WebpackBuildOptions): DevServerConfiguration => {
  return {
    port: port,
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    static: { directory: paths.static },
    historyApiFallback: true
  }
}

export default buildDevServer;