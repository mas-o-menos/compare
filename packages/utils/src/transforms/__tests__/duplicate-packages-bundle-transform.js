import { duplicatePackagesBundleTransform } from '../duplicate-packages-bundle-transform';

describe('duplicatePackagesBundleTransform', () => {
  test('should return empty', () => {
    const actual = duplicatePackagesBundleTransform();
    expect(actual).toEqual({
      warnings: {},
      stats: { duplicatePackagesCount: { value: 0 } },
    });
  });

  test('should return data', () => {
    const actual = duplicatePackagesBundleTransform({
      packages: {
        'package-a': {
          value: 50,
        },
        'package-b': {
          value: 10,
        },
        'package-b:package-a': {
          value: 10,
        },
        'package-c': {
          value: 10,
        },
        'org/package-d:package-c': {
          value: 10,
        },
      },
    });

    expect(actual).toEqual({
      warnings: {
        duplicatePackages: {
          'package-a': [
            'package-a',
            'package-b:package-a',
          ],
          'package-c': [
            'package-c',
            'org/package-d:package-c',
          ],
        },
      },
      stats: {
        duplicatePackagesCount: {
          value: 2,
        },
      },
    });
  });
});
