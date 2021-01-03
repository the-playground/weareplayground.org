/* eslint-disable @typescript-eslint/no-var-requires */
const tsConfig = require('./tsconfig.json');

// Let's Node use Typescript for compilation. It automatically points to our existing TS Config file
require('ts-node').register();

// Resolves the custom paths in our TS Config
require('tsconfig-paths').register({
    baseUrl: './',
    paths: tsConfig.compilerOptions.paths,
});

// Bring in our custom Type-scriptified Gatsby Node file.
module.exports = require('./@gatsby/gatsby-node.ts');
