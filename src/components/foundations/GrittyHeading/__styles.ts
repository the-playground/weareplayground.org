import styled from 'styled-components';
import { zIndex } from '@tokens';
import whiteGrit from '@assets/grit-white.png';
import blackGrit from '@assets/grit-black.png';
import { GrittyHeadingProps } from './__types';

const GRITTY_HEADING_LINE_HEIGHT = 1.3;

export const GrittyHeading = styled.div<
    Pick<GrittyHeadingProps, 'offset' | 'bgColor' | 'size'>
>`
    transform: rotate(${({ offset }) => offset}deg);

    > .text {
        background: ${({ theme, bgColor }) => theme.backgrounds[bgColor].color};
        display: inline;
        line-height: ${GRITTY_HEADING_LINE_HEIGHT};
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
