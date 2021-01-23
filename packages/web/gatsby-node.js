/* eslint-disable @typescript-eslint/no-var-requires */
const tsConfig = require('./tsconfig.json');

// Register the TypeScript evaluator in gatsby-config so we don't need to do
// it in any other gatsby-*.js file. It automatically reads TypeScript config from
// tsconfig.json.
require('ts-node').register();

// Resolves the custom paths in our TS Config
require('tsconfig-paths').register({
    baseUrl: './',
    paths: tsConfig.compilerOptions.paths,
});

// Bring in our custom Type-scriptified Gatsby Node file.
module.exports = require('./@gatsby/node-api');
