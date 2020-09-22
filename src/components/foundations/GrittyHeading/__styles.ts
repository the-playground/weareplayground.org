import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { breakpoints, zIndex, AvailableHeadingTypography } from '@tokens';
import whiteGrit from '@assets/grit-white.png';
import blackGrit from '@assets/grit-black.png';
import { GrittyHeadingProps } from './__types';

// A style map of desktop & mobile style for each size the title Highlight may appear as
const grittyHeadingStyle = {
    xs: {
        mobile: {
            lineHeight: 1.5,
            paddingBottom: 4,
        },
        desktop: {
            lineHeight: 1.5,
            paddingBottom: 4,
        },
    },
    s: {
        mobile: {
            lineHeight: 1.4,
            paddingBottom: 5,
        },
        desktop: {
            lineHeight: 1.4,
            paddingBottom: 6,
        },
    },
    m: {
        mobile: {
            lineHeight: 1.5,
            paddingBottom: 9,
        },
        desktop: {
            lineHeight: 1.5,
            paddingBottom: 10,
        },
    },
    l: {
        mobile: {
            lineHeight: 1.5,
            paddingBottom: 8,
        },
        desktop: {
            lineHeight: 1.4,
            paddingBottom: 13,
        },
    },
    xl: {
        mobile: {
            lineHeight: 1.4,
            paddingBottom: 10,
        },
        desktop: {
            lineHeight: 1.4,
            paddingBottom: 13,
        },
    },
};

// Get the desktop & mobile styles for the specific size
const getGrittyHeadingStyle = (
    size: AvailableHeadingTypography
): FlattenSimpleInterpolation => {
    const style = grittyHeadingStyle[size];

    return css`
        line-height: ${style.mobile.lineHeight};
        padding-bottom: ${style.mobile.paddingBottom}px;
        ${breakpoints.m} {
            line-height: ${style.desktop.lineHeight};
            padding-bottom: ${style.desktop.paddingBottom}px;
        }
    `;
};

export const GrittyHeading = styled.div<
    Pick<GrittyHeadingProps, 'offset' | 'bgColor' | 'size'>
>`
    transform: rotate(${({ offset }) => offset}deg);

    > .text {
        background: ${({ theme, bgColor }) => theme.backgrounds[bgColor].color};
        display: inline;
        letter-spacing: 5px;
        ${({ size }) => getGrittyHeadingStyle(size)};
        position: relative;
        z-index: ${zIndex.base};
    }

    > .text:before,
    > .text:after {
        content: '';
        display: block;
        height: 110%;
        position: absolute;
        pointer-events: none;
        background-size: 600px;
        width: 110%;
        top: 0;
        left: 0;
        z-index: ${zIndex.front};
    }

    > .text:before {
        background-image: url(${blackGrit});
    }

    > .text:after {
        background-image: url(${whiteGrit});
    }
`;
