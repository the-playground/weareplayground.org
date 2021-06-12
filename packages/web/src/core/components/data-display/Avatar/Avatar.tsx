import React from 'react';
import styled, { css } from 'styled-components';

import { AvailableSurface } from '@nerve/core/themes';
import { SanityImageDataWithAlt } from '@nerve/shared/types';
import { Image } from '@nerve/core/components';
import { borders } from '@nerve/core/tokens';

// TYPES
export interface AvatarProps {
    image?: SanityImageDataWithAlt;
    bgColor?: AvailableSurface;
    borderColor?: AvailableSurface;
    size: 's' | 'm' | 'l' | 'xl';
    className?: string;
}

// STYLES

const avatarSizes = {
    s: '36px',
    m: '48px',
    l: '64px',
    xl: '80px',
};

export const StyledAvatar = styled.div<AvatarProps>`
    --avatar-size: ${({ size }) => avatarSizes[size]};

    border-radius: ${borders.circle};
    width: var(--avatar-size);
    height: var(--avatar-size);

    display: flex;
    overflow: hidden;
    position: relative;
    font-size: 1.25rem;
    align-items: center;
    flex-shrink: 0;
    line-height: 1;
    user-select: none;
    justify-content: center;

    > .image {
        line-height: 0;
        height: 100%;
        width: 100%;
    }

    /* Optional BG Color */
    ${({ theme, bgColor }) =>
        bgColor &&
        css`
            background-color: ${theme.surfaces[bgColor]};
        `};

    /* Optional Border Color */
    ${({ borderColor, theme }) =>
        borderColor &&
        css`
            border: 1px solid ${theme.surfaces[borderColor]};
        `};
`;

// COMPONENT DEFINITION
export const Avatar: React.FC<AvatarProps> = ({
    image,
    size = 'm',
    borderColor,
    bgColor,
    className,
    children,
}) => {
    return (
        <StyledAvatar
            size={size}
            borderColor={borderColor}
            bgColor={bgColor}
            className={className}
        >
            {image && (
                <Image
                    className="image"
                    image={image.asset}
                    alt={image.alt}
                    objectFit="cover"
                />
            )}
            {children}
        </StyledAvatar>
    );
};
