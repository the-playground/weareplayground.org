import styled from 'styled-components';
import { rgba } from 'polished';

import { animation, spacing, zIndex } from '@tokens';

export const ShowPoster = styled.article`
    border-radius: 7px;
    overflow: hidden;
    position: relative;
    transition: ${animation.cardHover};

    .overlay {
        background: linear-gradient(
            0deg,
            rgba(7, 18, 29, 0.7) 15%,
            rgba(7, 18, 29, 0) 100%
        );
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
        transform: scale(1.01);
        .overlay {
            opacity: 0.2;
        }
    }
`;
