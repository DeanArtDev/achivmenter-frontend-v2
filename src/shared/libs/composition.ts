type ReturnedFunction<T> = (arg: T) => T;
type FunctionAsArgument<T> = (arg: T) => T;

const compose = <Result = unknown, FunctionInstance extends FunctionAsArgument<Result> = FunctionAsArgument<Result>>(
  ...functions: FunctionInstance[]
): ReturnedFunction<Result> => {
  return (x) => functions.reduceRight<Result>((acc, fn) => fn(acc), x);
};

const pipe = <Result = unknown, FunctionInstance extends FunctionAsArgument<Result> = FunctionAsArgument<Result>>(
  ...functions: FunctionInstance[]
): ReturnedFunction<Result> => {
  return (x) => functions.reduce<Result>((acc, fn) => fn(acc), x);
};

export { compose, pipe };
