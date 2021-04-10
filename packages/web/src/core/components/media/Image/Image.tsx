import React from 'react';

import {
    GatsbyImage,
    StaticImage as StaticGatsbyImage,
    getImage as getGatsbyImage,
} from 'gatsby-plugin-image';

/**
 * A general note about this file: We are wrapping the Gatsby Image API in order to:
 *
 * 1. Provide a reference to a core component that lives in our design system instead of importing from a node module in our project.
 * 2. Give us flexibility to set global defaults or apply logic globally if needed
 * 3. Allow us to change the underlying API without affecting implementation.
 *
 * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
 * @link https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/
 */

/**
 * A thin wrapper for Gatsby Image
 * @link https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#gatsbyimage
 *
 * @param image Accepts any kind of allowed gatsby image object and prepares it to pass to the image component.
 * @param props All available Gatsby image props
 */
export const Image: typeof GatsbyImage = ({ image, alt, ...props }) => {

    /**
     * This makes our Image component easier to work with, because it allows us to pass in the entire image stack without
     * having to drill down to nested props (super fragile). It is smart enough to know what has been passed in and
     * what it needs to return for the image in question to work properly.
     *
     * It also allows the underlying Gatsby Image API to change without us having to worry about changing all of our
     * image queries.
     */
    const _image = getImage(image)

    if(!_image){
        console.error('There was an error loading the requested image from the Image component. Request details available in the output object:', {requestedImageData: image, getImageResults: _image, alt});
        return null;
    }
    return <GatsbyImage image={_image} alt={alt} {...props} />;
};

/**
 * A thin wrapper for Gatsby Static Image
 * @link https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#staticimage
 *
 * @param props All available StaticGatsbyImage props
 */
export const StaticImage: typeof StaticGatsbyImage = ({ ...props }) => {
    return <StaticGatsbyImage {...props} />;
};


/**
 * A thin wrapper for getGatsbyImage–used for composing images to pass into the Image component.
 * @link https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#getimage
 *
 * @param props all available getGatsbyImage props
 */
export const getImage: typeof getGatsbyImage = ({...props}) => getGatsbyImage({...props})