import React from 'react';
import styled, { css } from 'styled-components';

import { AvailableSurface, AvailableTypographyTheme } from '@web/ui/themes';
import { SanityImageDataWithAlt } from '@web/shared/types';
import { Image } from '@web/ui/core';
import { borders, fonts } from '@web/ui/tokens';

// TYPES
export interface AvatarProps {
    image?: SanityImageDataWithAlt;
    bgColor?: AvailableSurface;
    borderWidth?: number;
    borderColor?: AvailableSurface;
    textColor?: AvailableTypographyTheme;
    size?: keyof typeof avatarSizes;
    className?: string;
}

// STYLES

const avatarSizes = {
    s: '36px',
    m: '48px',
    l: '64px',
    xl: '80px',
    xxl: '96px',
};

export const StyledAvatar = styled.div<AvatarProps>`
    --avatar-size: ${({ size }) => avatarSizes[size!]};
    --avatar-font-divider: 2;
    --avatar-margin-divider: 3;

    border-radius: ${borders.circle};
    color: ${({ textColor, theme }) => theme.typography[textColor!]};
    font-size: calc(var(--avatar-size) / var(--avatar-font-divider));
    margin-right: calc(var(--avatar-size) / var(--avatar-margin-divider));
    width: var(--avatar-size);
    height: var(--avatar-size);
    ${fonts.bodyText}

    display: flex;
    overflow: hidden;
    position: relative;
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
    ${({ borderColor, borderWidth, theme }) =>
        borderColor &&
        css`
            border: ${borderWidth}px solid ${theme.surfaces[borderColor]};
        `};
`;

// COMPONENT DEFINITION
export const Avatar: React.FC<AvatarProps> = ({
    image,
    size = 'm',
    borderColor,
    borderWidth = 1,
    bgColor,
    textColor = 'light',
    className,
    children,
}) => {
    return (
        <StyledAvatar
            size={size}
            textColor={textColor}
            borderColor={borderColor}
            borderWidth={borderWidth}
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
