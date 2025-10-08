/** @type {import('jest').Config} */
export const testMatch = [
  "**/__tests__/**/*.integration.[jt]s?(x)",
  "**/?(*.)+(integration).[tj]s?(x)",
];
export const testEnvironment = "node";
