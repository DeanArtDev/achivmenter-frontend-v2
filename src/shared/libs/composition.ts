type ReturnedFunction<T> = (value: T) => T;

const compose = <Result = any, FunctionInstance extends Function = Function>(
  ...functions: FunctionInstance[]
): ReturnedFunction<Result> => {
  return x => functions.reduceRight<Result>((acc, fn) => fn(acc), x);
};

const pipe = <Result = any, FunctionInstance extends Function = Function>(
  ...functions: FunctionInstance[]
): ReturnedFunction<Result> => {
  return x => functions.reduce<Result>((acc, fn) => fn(acc), x);
};

export { compose, pipe };
