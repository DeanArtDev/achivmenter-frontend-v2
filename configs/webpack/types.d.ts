export type WebpackMode = 'production' | 'development';
export type WebpackEnv = {
  mode: WebpackMode;
  port: number;
};
export type ConfigPaths = {
  ts: string
};
export type AppPaths = {
  root: string,
  src: string;
  configs: ConfigPaths;
  htmlTemplate: string;
  entry: string;
  output: string;
  static: string;
  app: string;
  widgets: string;
  entities: string;
  features: string;
  pages: string;
  processes: string;
  shared: string;
};

export type WebpackBuildOptions = {
  mode: WebpackMode;
  isDev: boolean;
  paths: AppPaths;
  port: number;
};
