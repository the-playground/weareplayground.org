import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { zIndex } from '@nerve/core/tokens';
import { SectionWithBGProps } from './SectionWithBG.d';

export const Section = styled(BackgroundImage)<SectionWithBGProps>`
    background-position: ${({ bgPosition }) => bgPosition} !important;

    > .content {
        position: relative;
        z-index: ${zIndex.front};
    }

    /* .loading::after {
        filter: blur(1000px);
    } */
`;
