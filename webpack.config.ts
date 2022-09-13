import path from "path";
import webpack from "webpack";
import {WebpackBuildOptions, WebpackEnv} from "./config/webpack/types";
import buildWebpackConfig from "./config/webpack/buildWebpackConfig";

module.exports = (env: WebpackEnv): webpack.Configuration => {
  const options: WebpackBuildOptions = {
    mode: env.mode || "development",
    isDev: env.mode === "development",
    port: 3000,
    paths: {
      src: path.resolve(__dirname, "src"),
      entry: path.resolve(__dirname, "src/app/index.ts"),
      output: path.resolve(__dirname, "build"),
      static: path.resolve(__dirname, 'public'),
      htmlTemplate: path.resolve(__dirname, "public/index.html"),
    }
  }

  return buildWebpackConfig(options);
};
