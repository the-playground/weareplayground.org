import styled from 'styled-components';

import { animation, breakpoints, spacing, zIndex } from '@tokens';

export const ShowPoster = styled.article`
    border-radius: 7px;
    overflow: hidden;
    position: relative;
    transition: ${animation.cardHover};

    .overlay {
        background: var(--posterOverlay);
        bottom: 0;
        display: block;
        height: 100%;
        left: 0;
        position: absolute;
        pointer-events: none;
        right: 0;
        top: 0;
        transition: ${animation.cardHover};
        width: 100%;
        z-index: ${zIndex.base};
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
        ${breakpoints.m} {
            transform: scale(1.01);
            .overlay {
                opacity: 0.2;
            }
        }
    }
`;
