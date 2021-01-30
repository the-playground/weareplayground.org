import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { zIndex } from '@nerve/core/tokens';
import { SectionWithBGProps } from './SectionWithBG.d';

export const Section = styled(BackgroundImage)<SectionWithBGProps>`
    background-position: ${({ bgPosition }) => bgPosition} !important;

    /**
     * Handle background blur amount for the placeholder image
     */
    &[data-image-loading='true']::before,
    &[data-image-loading='true']::after {
        filter: blur(15px);
    }

    > .content {
        position: relative;
        z-index: ${zIndex.front};
    }
`;
