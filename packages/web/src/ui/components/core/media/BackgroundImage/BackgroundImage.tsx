import React from 'react';
import styled from 'styled-components';

import { Image, ImageProps } from '@web/core/components';
import { zIndex } from '@web/ui/tokens';

const StyledBackgroundImage = styled.div`
    user-select: none;
    > .bg-image {
        bottom: 0;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        z-index: ${zIndex.zero};
    }
`;

export const BackgroundImage: React.FC<BackgroundImageProps> = (props) => {
    return (
        <StyledBackgroundImage aria-hidden="true">
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
