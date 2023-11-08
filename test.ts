class MyClass {
  myProp = '';
  method(): Promise<string> {
    return Promise.resolve('');
  }
}

interface Special extends MyClass {
  /**
   * @deprecated Not Supported in BiDi
   */
  method(): never;
}

const obj: Special = {
  myProp: 'Works',

  method(): never {
    throw new Error();
  },
};

const _t = obj.method();
