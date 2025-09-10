/** @type {import('jest').Config} */
export default {
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapping: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: {
          module: 'ESNext',
          moduleResolution: 'bundler',
        },
      },
    ],
  },
  testEnvironment: 'node',
  collectCoverageFrom: [
    'packages/*/src/**/*.{ts,tsx}',
    '!packages/*/src/**/*.d.ts',
  ],
  testMatch: [
    '<rootDir>/packages/*/src/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>/packages/*/src/**/*.{test,spec}.{ts,tsx}',
  ],
  projects: [
    {
      displayName: 'graph-core',
      testMatch: [
        '<rootDir>/packages/graph-core/src/**/*.{test,spec}.{ts,tsx}',
      ],
    },
    {
      displayName: 'graph',
      testMatch: ['<rootDir>/packages/graph/src/**/*.{test,spec}.{ts,tsx}'],
    },
    {
      displayName: 'react',
      testMatch: ['<rootDir>/packages/react/src/**/*.{test,spec}.{ts,tsx}'],
      testEnvironment: 'jsdom',
    },
  ],
};
