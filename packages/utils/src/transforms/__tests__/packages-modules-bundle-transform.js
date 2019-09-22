import { packagesModulesBundleTransform } from '../packages-modules-bundle-transform';

describe('packagesModulesBundleTransform', () => {
  test('should return empty', () => {
    const actual = packagesModulesBundleTransform();
    expect(actual).toEqual({ packages: {} });
  });

  test('should return size metrics', () => {
    const actual = packagesModulesBundleTransform({
      modules: {
        0: {
          modules: {
            'pages/page-a.js': {
              name: 'pages/page-a.js',
              value: 100,
            },
          },
        },
        1: {
          modules: {
            './node_modules/package-a/index.js': {
              name: './node_modules/package-a/index.js',
              value: 20,
            },
            './~/package-c/index.js': {
              name: './~/package-c/index.js',
              value: 10,
            },
            './node_modules/package-a/dist/module-a.js': {
              name: './node_modules/package-a/dist/module-a.js',
              value: 30,
            },
            './node_modules/package-b/index.js': {
              name: './node_modules/package-b/index.js',
              value: 10,
            },
            './node_modules/package-a/node_modules/package-b/index.js': {
              name: './node_modules/package-a/node_modules/package-b/index.js',
              value: 20,
            },
            './node_modules/@org/package-a/index.js': {
              name: './node_modules/@org/package-a/index.js',
              value: 20,
            },
            './node_modules/@org/package-a/node_modules/@org/package-b/index.js': {
              name: './node_modules/@org/package-a/node_modules/@org/package-b/index.js',
              value: 20,
            },
          },
        },
      },
    });

    expect(actual).toEqual({
      packages: {
        'package-a': {
          value: 50,
        },
        'package-b': {
          value: 10,
        },
        'package-c': {
          value: 10,
        },
        'package-a:package-b': {
          value: 20,
        },
        '@org/package-a': {
          value: 20,
        },
        '@org/package-a:@org/package-b': {
          value: 20,
        },
      },
    });
  });
});
