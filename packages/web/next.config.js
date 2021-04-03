/* eslint-disable @typescript-eslint/no-var-requires */
const withLinaria = require('next-linaria');
const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_SERVER,
} = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
    return withLinaria({
        defaultConfig,
        linaria: {
            /* linaria options here */
        },
    });
};
