import React from 'react';

import {
    GatsbyImage,
    StaticImage as StaticGatsbyImage,
    getImage,
} from 'gatsby-plugin-image';

/**
 * A thin wrapper for Gatsby Image to allow us to easily add
 * our own global customizations and improve developer experience
 * when working with the image and image types.
 *
 * @param props All Gatsby image props as a destructured object
 */
export const Image: typeof GatsbyImage = ({ ...props }) => {
    return <GatsbyImage {...props} />;
};

export const StaticImage: typeof StaticGatsbyImage = ({ ...props }) => {
    return <StaticGatsbyImage {...props} />;
};
