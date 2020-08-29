import React from 'react';
import Img, { GatsbyImageProps, FluidObject, FixedObject } from 'gatsby-image';

export const Image: React.FC<ImageProps> = ({ ...props }) => (
    <Img {...props} durationFadeIn={1000} />
);

export interface ImageProps extends GatsbyImageProps {}

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

export interface ImageFixedObjectProps extends FixedObject {}

export interface ImageFluidObjectProps extends FluidObject {}
