import React from 'react';
import styled, { css } from 'styled-components';
import classnames from 'classnames';
/**
 * Our BrandImage is a special Image wrapper component that applies uniform image treatments
 * to images. It also gives us the control we need to pull specific levers without
 * having to pass inline styles or classes to the Image component whenever it's consumed.
 */

import { Image, ImageProps } from '../Image/Image';

// TYPES
export interface BrandImageProps extends ImageProps {
    grain?: number;
    grit?: number;
    saturation?: number;
}

// STYLES
const StyledBrandImage = styled(Image)``;

// COMPONENT DEFINITION
export const BrandImage = ({
    grain = 1,
    saturation = 0.8,
    ...rest
}: BrandImageProps) => {
    return <StyledBrandImage imgStyle={{}} {...rest} />;
};
