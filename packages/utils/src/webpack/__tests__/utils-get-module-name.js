import { getModuleName } from '../utils';

describe('Webpack/utils/getModuleName', () => {
  test('should return empty name if missing', () => {
    expect(getModuleName()).toBe('');
  });
  test('should return name as it is', () => {
    expect(getModuleName('./node_modules/lodash/_apply.js')).toBe(
      './node_modules/lodash/_apply.js',
    );
  });

  test('should skip loader details', () => {
    expect(getModuleName('!babel-loader!eslint-loader!./node_modules/lodash/_apply.js')).toBe(
      './node_modules/lodash/_apply.js',
    );
    expect(getModuleName('plugin/src/loader.js?{"modules":["./src/main.js"]}!')).toBe(
      'plugin/src/loader.js?{"modules":["./src/main.js"]}!'
    );
  });

  test('should skip webpack module details', () => {
    expect(getModuleName('./node_modules/lodash/_apply.js + 7 modules')).toBe(
      './node_modules/lodash/_apply.js',
    );
  });
});
