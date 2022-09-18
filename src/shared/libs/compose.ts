const compose = <Result = any>(...fns: Function[]): ((x: Result) => Result) => {
  return x => fns.reduceRight<Result>((acc, fn) => fn(acc), x);
};

const pipe = <Result = any>(...fns: Function[]): ((x: Result) => Result) => {
  return x => fns.reduce<Result>((acc, fn) => fn(acc), x);
};

export { compose, pipe };
