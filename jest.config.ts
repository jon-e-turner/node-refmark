/** @jest-config-loader ts-node */

import type { Config } from 'jest';

const config: Config = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts', 'bin/**/*.ts'],
  coverageProvider: 'v8',
  extensionsToTreatAsEsm: ['.ts'],
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/coverage/'],
};

export default config;
