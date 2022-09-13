import {Configuration} from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {WebpackBuildOptions} from "./types";


const buildPlugins = ({ paths, isDev }: WebpackBuildOptions): Configuration["plugins"] => {
  const pluginsList: Configuration["plugins"] = [
    new HTMLWebpackPlugin({      template: paths.htmlTemplate,      title: "Achivmenter"    })
  ];

  if (!isDev) pluginsList.push(      new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
    chunkFilename: "[id].[name].[contenthash].css",
  }));

  return pluginsList;
}

export default buildPlugins;