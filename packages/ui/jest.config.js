module.exports = {
  clearMocks: true,
  globalSetup: '<rootDir>/build/jest/global-setup.js',
  setupFiles: [
    'core-js',
    '<rootDir>/build/jest/register-context.js',
  ],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '^.+\\.md?$': 'markdown-loader-jest',
  },
  testEnvironment: 'node',
};
