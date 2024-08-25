const obj = {
  one: 1,
  two: 2,
  three: 3,
};

('this config avoids semicolons at the end of statements and uses single quotes for strings');

const arrowFunctions: (arg: boolean) => number = (avoidParens) => 1;

interface MyInterface {
  foo(): string;
  bar: Array<number>;
}

export abstract class Foo implements MyInterface {
  foo() {
    // TODO: return an actual value here
    return 'hello';
  }
  get bar() {
    return [
      1,

      2, 3,
    ];
  }
}

type RequestType = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'OPTIONS' | 'CONNECT' | 'DELETE' | 'TRACE';

const countUrlQuery = (query: string) => {
  const url = new URL(query);

  return url.searchParams.size;
};
