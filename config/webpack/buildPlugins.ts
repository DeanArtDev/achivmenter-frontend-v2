import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {WebpackBuildOptions} from "./types";


const buildPlugins = ({ paths }: WebpackBuildOptions): webpack.Configuration["plugins"] => {
  return [
    new HTMLWebpackPlugin({
      template: paths.htmlTemplate,
      title: "Achivmenter"
    })
  ]
}

export default buildPlugins;