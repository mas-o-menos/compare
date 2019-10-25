export default {
  runs: [
    {
      internalBuildNumber: 1,
    },
  ],
  sizes: [
    {
      key: 'webpack.assets.totalSizeByTypeJS',
      label: 'JS',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          value: 50000,
          displayValue: '48.83KB',
        },
      ],
    },
    {
      key: 'webpack.assets.totalSizeByTypeCSS',
      label: 'CSS',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          value: 10000,
          displayValue: '9.77KB',
        },
      ],
    },
    {
      key: 'webpack.assets.totalSizeByTypeIMG',
      label: 'IMG',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          value: 1000,
          displayValue: '1000B',
        },
      ],
    },
    {
      key: 'webpack.assets.totalSizeByTypeMEDIA',
      label: 'Media',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          value: 0,
          displayValue: '0B',
        },
      ],
    },
    {
      key: 'webpack.assets.totalSizeByTypeFONT',
      label: 'Fonts',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          value: 0,
          displayValue: '0B',
        },
      ],
    },
    {
      key: 'webpack.assets.totalSizeByTypeHTML',
      label: 'HTML',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          value: 2000,
          displayValue: '1.95KB',
        },
      ],
    },
    {
      key: 'webpack.assets.totalSizeByTypeOTHER',
      label: 'Other',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          value: 0,
          displayValue: '0B',
        },
      ],
    },
    {
      key: 'webpack.assets.totalSizeByTypeALL',
      label: 'Total Size',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          value: 63000,
          displayValue: '61.52KB',
        },
      ],
    },
    {
      key: 'webpack.assets.totalInitialSizeCSS',
      label: 'Initial CSS',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          value: 10000,
          displayValue: '9.77KB',
        },
      ],
    },
    {
      key: 'webpack.assets.totalInitialSizeJS',
      label: 'Initial JS',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          value: 50000,
          displayValue: '48.83KB',
        },
      ],
    },
  ],
  assets: [
    {
      key: 'main.css',
      label: 'main.css',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          name: 'main.a1b2c3.css',
          isEntry: true,
          isInitial: true,
          isChunk: false,
          value: 10000,
          displayValue: '9.77KB',
        },
      ],
    },
    {
      key: 'main.js',
      label: 'main.js',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          name: 'main.a2b3c4.js',
          isEntry: true,
          isInitial: true,
          isChunk: false,
          value: 50000,
          displayValue: '48.83KB',
        },
      ],
    },
    {
      key: 'logo.png',
      label: 'logo.png',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          name: 'logo.a3b4c5.png',
          isEntry: false,
          isInitial: false,
          isChunk: false,
          value: 1000,
          displayValue: '1000B',
        },
      ],
    },
    {
      key: 'index.html',
      label: 'index.html',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          name: 'index.html',
          isEntry: false,
          isInitial: false,
          isChunk: false,
          value: 2000,
          displayValue: '1.95KB',
        },
      ],
    },
  ],
  modules: [
    {
      chunkId: '1',
      chunkNames: ['main'],
      modules: [
        {
          key: 'module-a',
          label: 'module-a',
          changed: false,
          biggerIsBetter: false,
          runs: [
            {
              name: 'module-a',
              value: 1000,
              displayValue: '1000B',
            },
          ],
        },
        {
          key: 'module-b',
          label: 'module-b',
          changed: false,
          biggerIsBetter: false,
          runs: [
            {
              name: 'module-b',
              value: 2000,
              displayValue: '1.95KB',
            },
          ],
        },
        {
          key: 'node_modules/package-a/index.js',
          label: 'node_modules/package-a/index.js',
          changed: false,
          biggerIsBetter: false,
          runs: [
            {
              name: 'node_modules/package-a/index.js',
              value: 1000,
              displayValue: '1000B',
            },
          ],
        },
        {
          key: 'node_modules/package-a/node_modules/package-c/index.js',
          label: 'node_modules/package-a/node_modules/package-c/index.js',
          changed: false,
          biggerIsBetter: false,
          runs: [
            {
              name: 'node_modules/package-a/node_modules/package-c/index.js',
              value: 1000,
              displayValue: '1000B',
            },
          ],
        },
        {
          key: 'node_modules/package-b/index.js',
          label: 'node_modules/package-b/index.js',
          changed: false,
          biggerIsBetter: false,
          runs: [
            {
              name: 'node_modules/package-b/index.js',
              value: 1000,
              displayValue: '1000B',
            },
          ],
        },
        {
          key: 'node_modules/package-c/index.js',
          label: 'node_modules/package-c/index.js',
          changed: false,
          biggerIsBetter: false,
          runs: [
            {
              name: 'node_modules/package-c/index.js',
              value: 1000,
              displayValue: '1000B',
            },
          ],
        },
      ],
    },
  ],
  packages: [
    {
      key: 'package-a',
      label: 'package-a',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          value: 1000,
          displayValue: '1000B',
        },
      ],
    },
    {
      key: 'package-a:package-c',
      label: 'package-a:package-c',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          value: 1000,
          displayValue: '1000B',
        },
      ],
    },
    {
      key: 'package-b',
      label: 'package-b',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          value: 1000,
          displayValue: '1000B',
        },
      ],
    },
    {
      key: 'package-c',
      label: 'package-c',
      changed: false,
      biggerIsBetter: false,
      runs: [
        {
          value: 1000,
          displayValue: '1000B',
        },
      ],
    },
  ],
};
