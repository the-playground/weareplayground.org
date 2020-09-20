import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { breakpoints, zIndex, AvailableHeadingTypography } from '@tokens';
import { TitleBlockProps } from './__types';

// A style map of desktop & mobile style for each size the title block may appear as
const titleBlockStyle = {
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
            lineHeight: 1.4,
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
const getTitleBlockStyle = (
    size: AvailableHeadingTypography
): FlattenSimpleInterpolation => {
    const style = titleBlockStyle[size];

    return css`
        line-height: ${style.mobile.lineHeight};
        padding-bottom: ${style.mobile.paddingBottom}px;
        ${breakpoints.m} {
            line-height: ${style.desktop.lineHeight};
            padding-bottom: ${style.desktop.paddingBottom}px;
        }
    `;
};

export const TitleBlock = styled.div<
    Pick<TitleBlockProps, 'offset' | 'bgColor' | 'size'>
>`
    transform: rotate(${(props) => props.offset}deg);

    > .text {
        background: ${(props) => props.theme.backgrounds[props.bgColor].color};
        display: inline;
        letter-spacing: 5px;
        ${(props) => getTitleBlockStyle(props.size)};
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
        background-image: url(textures/grit--black.png);
    }

    > .text:after {
        background-image: url(textures/grit--white.png);
    }
`;
