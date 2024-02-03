import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Handle CSS files and CSS modules
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    // Handle image files
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    // Handle module aliases (if you have them in your project)
    '^@components/(.*)$': '<rootDir>/src/components/$1',
  },
  transform: {
    // Use babel-jest to transpile tests with the setup from Babel
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  // If you are using webpack and have defined aliases, you might need to add them here as well
};

export default config;
