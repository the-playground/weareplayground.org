import React from 'react';
import Img, { GatsbyImageProps } from 'gatsby-image';

export const Image: React.FC<ImageProps> = ({ ...props }) => (
    <Img {...props} durationFadeIn={1000} />
);

export interface ImageProps extends GatsbyImageProps {}
