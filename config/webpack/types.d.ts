export type WebpackMode = 'production' | 'development';
export type WebpackEnv = {
  mode: WebpackMode;
  port: number;
};
export type AppPaths = {
  src: string;
  htmlTemplate: string;
  entry: string;
  output: string;
  static: string;
};

export type WebpackBuildOptions = {
  mode: WebpackMode;
  isDev: boolean;
  paths: AppPaths;
  port: number;
};
