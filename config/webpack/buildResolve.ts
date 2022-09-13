import webpack from "webpack";

const buildResolve = (): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: ["./", 'node_modules'],
    mainFiles: ['index'],
    alias: {    }
  }
}

export default buildResolve;