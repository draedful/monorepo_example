/** @type {import('jest').Config} */
export default {
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^@draedful-private/graph-core$': '<rootDir>/../graph-core/src/index.ts',
    '^@draedful-private/graph$': '<rootDir>/../graph/src/index.ts',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: {
          module: 'ESNext',
          moduleResolution: 'bundler',
          jsx: 'react-jsx',
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  testMatch: ['<rootDir>/src/**/*.{test,spec}.{ts,tsx}'],
  transformIgnorePatterns: ['node_modules/(?!(@draedful-private)/)'],
};
