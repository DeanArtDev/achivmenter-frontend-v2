import {WebpackBuildOptions} from "./types";
import webpack from "webpack";

const buildLoaders = ({ isDev } : WebpackBuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  return [
    typescriptLoader,
  ]
}

export default buildLoaders;