import { getAssetName } from '../get-asset-name';

test('Extract filename', () => {
  expect(getAssetName('main.d2490.js')).toBe('main.js');
  expect(getAssetName('main.d249062c08abb6b31a03.js')).toBe('main.js');
  expect(getAssetName('main.d249062c08abb6b31a03.min.js')).toBe('main.min.js');
  expect(getAssetName('0.d249062c08abb6b31a03.js')).toBe('0.js');
  expect(getAssetName('assets/js/main.d249062c08abb6b31a03.js')).toBe('assets/js/main.js');
  expect(getAssetName('d249062c08abb6b31a03.js')).toBe('d249062c08abb6b31a03.js');

  expect(getAssetName('main-d2490.js')).toBe('main.js');
  expect(getAssetName('main-d249062c08abb6b31a03.js')).toBe('main.js');
  expect(getAssetName('main-d249062c08abb6b31a03.min.js')).toBe('main.min.js');
  expect(getAssetName('0-d249062c08abb6b31a03.js')).toBe('0.js');
  expect(getAssetName('assets/js/main-d249062c08abb6b31a03.js')).toBe('assets/js/main.js');
  expect(getAssetName('d249062c08abb6b31a03.js')).toBe('d249062c08abb6b31a03.js');

  expect(getAssetName('login-chunk.d2490.js')).toBe('login-chunk.js');
  expect(getAssetName('login-abcde.d2490.js')).toBe('login-abcde.js');
  expect(getAssetName('web-app/login-chunk.d2490.js')).toBe('web-app/login-chunk.js');
});
