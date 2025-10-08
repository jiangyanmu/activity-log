/** @type {import('jest').Config} */
module.exports = {
  testMatch: ['**/__tests__/**/*.integration.[jt]s?(x)', '**/?(*.)+(integration).[tj]s?(x)'],
  testEnvironment: 'node',
};
