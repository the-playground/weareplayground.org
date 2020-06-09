import styled from 'styled-components';

import { animation, spacing, zIndex } from '@tokens';

export const ShowPoster = styled.article`
    position: relative;

    .overlay {
        background: var(--posterOverlay);
        bottom: 0;
        display: block;
        height: 100%;
        left: 0;
        opacity: 0.5;
        position: absolute;
        pointer-events: none;
        right: 0;
        top: 0;
        transition: ${animation.linkHover};
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

    &:hover {
        .overlay {
            opacity: 0.2;
        }
    }
`;
