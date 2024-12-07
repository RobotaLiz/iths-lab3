const nextJest = require('next/jest')

/** @type {import('jest').Config} */

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
const config = {

  clearMocks: true,


  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
  testEnvironment: "jsdom",

 
};

module.exports = createJestConfig(config)
