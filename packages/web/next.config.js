/* eslint-disable @typescript-eslint/no-var-requires */

const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_SERVER,
} = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
    return {
        defaultConfig,
    };
};
