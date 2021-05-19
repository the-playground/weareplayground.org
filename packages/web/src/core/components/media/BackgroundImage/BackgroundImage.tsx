import React from 'react';
import styled from 'styled-components';

import { Image, ImageProps } from '@nerve/core/components';
import { zIndex } from '@nerve/core/tokens';

const StyledBackgroundImage = styled.div`
    > .bg-image {
        bottom: 0;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        z-index: ${zIndex.behind};
    }
`;

export const BackgroundImage: React.FC<BackgroundImageProps> = (props) => {
    return (
        <StyledBackgroundImage>
            <Image
                className="bg-image"
                {...props}
                objectFit="cover"
                alt=""
                aria-hidden="true"
            />
        </StyledBackgroundImage>
    );
};

export type BackgroundImageProps = Omit<
    ImageProps,
    'alt' | 'objectFit' | 'className'
>;
