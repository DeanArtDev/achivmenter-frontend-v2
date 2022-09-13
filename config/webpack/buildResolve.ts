import {ResolveOptions} from "webpack";

const buildResolve = (): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: ["./", 'node_modules'],
    mainFiles: ['index'],
    alias: {    }
  }
}

export default buildResolve;