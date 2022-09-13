import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import {WebpackBuildOptions} from "./types";

const buildDevServer = ({ paths, port }: WebpackBuildOptions): DevServerConfiguration => {
  return {
    open: false,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    static: { directory: paths.static },
    port: port,
    historyApiFallback: true
  }
}

export default buildDevServer;