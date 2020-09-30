import styled from 'styled-components';

import { animation, breakpoints, spacing, zIndex } from '@tokens';

export const ShowPoster = styled.article`
    border-radius: 7px;
    overflow: hidden;
    position: relative;
    transition: ${animation.cardHover};

    .image {
        filter: grayscale(1);
        transition: ${animation.cardHover};
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
    }

    .season {
        text-transform: lowercase;
        margin-top: ${spacing.component.xs};
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
