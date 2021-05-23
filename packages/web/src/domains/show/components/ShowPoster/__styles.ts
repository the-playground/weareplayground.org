import styled, { css } from 'styled-components';

import { animation, breakpoints, spacing, zIndex } from '@nerve/core/tokens';

const posterBorderStyles = css`
    border-radius: 7px;
    overflow: hidden;
`;

export const ShowPoster = styled.article`
    ${posterBorderStyles}
    position: relative;
    transition: ${animation.cardHover};

    .image {
        ${posterBorderStyles}
        border-radius: 7px;
        overflow: hidden;
        filter: grayscale(1);
        transition: ${animation.cardHover};
        z-index: ${zIndex.behind};
    }

    .overlay {
        pointer-events: none;
        transition: ${animation.cardHover};
    }

    .content {
        bottom: 0;
        position: absolute;
        padding: ${spacing.component.m};
        z-index: ${zIndex.front};
    }

    .title {
        text-transform: uppercase;
        margin-bottom: ${spacing.component.xxs};
    }

    .season {
        text-transform: lowercase;
        margin-top: ${spacing.component.s};
    }

    &:hover {
        .image {
            filter: grayscale(0);
        }

        .overlay {
            opacity: 0.2;
        }

        ${breakpoints.m} {
            transform: scale(1.01);
        }
    }
`;
