/* eslint-disable @typescript-eslint/no-var-requires */
const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_SERVER,
} = require('next/constants');

const withLinaria = require('next-linaria');

module.exports = (phase, { defaultConfig }) => {
    return withLinaria({
        defaultConfig,
        linaria: {
            /* linaria options here */
        },
        future: {
            webpack5: true,
        },
    });
};

const nextConfig = (phase, { defaultConfig }) => {
    return {
        defaultConfig,
        linaria: {
            /* linaria options here */
        },
        future: {
            webpack5: true,
        },
    };
};

module.exports = withLinaria(nextConfig);
