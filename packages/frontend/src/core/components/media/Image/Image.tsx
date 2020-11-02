import React from 'react';
import Img, {
    GatsbyImageFixedProps,
    GatsbyImageFluidProps,
    FixedObject,
    FluidObject,
} from 'gatsby-image';

/**
 * A thin wrapper for Gatsby Image to allow us to easily add
 * our own global customizations and improve developer experience
 * when working with the image and image types.
 *
 * @param props All Gatsby image props as a destructured object
 */
export const Image: React.FC<FixedImageProps | FluidImageProps> = ({
    ...props
}) => <Img {...props} durationFadeIn={1000} />;

// Localize Gatsby Image Props into this component
export interface FixedImageProps extends GatsbyImageFixedProps {
    // Multiple size possibilities from Prismic
    thumbnails?: {
        [key: string]: FixedImageProps;
    };
}

export interface FluidImageProps extends GatsbyImageFluidProps {
    // Multiple size possibilities from Prismic
    thumbnails?: {
        [key: string]: FluidImageProps;
    };
}

// The interfaces below will never be directly consumed as props for the
// `Image` component, but they will allow us to more easily
// work with images from `localFile` queries more easily, as those props
// differ from standard `GatsbyImageProps`.
export interface LocalFileImageProps {
    alt: string;
    localFile: {
        childImageSharp: {
            fixed?: FixedObject | FixedObject[];
            fluid?: FluidObject | FluidObject[];
            resolutions?: FixedObject;
            sizes?: FluidObject;
        };
    };
}

export type ImageFixedObjectProps = FixedObject;

export type ImageFluidObjectProps = FluidObject;
