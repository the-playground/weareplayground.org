import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { zIndex } from '@nerve/core/tokens';
import { SectionProps } from './Section.d';

export const SectionWithBackgroundImage = styled(BackgroundImage)<SectionProps>`
    background-position: ${({ bgPosition }) => bgPosition} !important;
    > .content {
        position: relative;
        z-index: ${zIndex.front};
    }
`;

export const Section = styled.section<SectionProps>`
    background: ${({ theme, bgColor }) => bgColor && theme.surfaces[bgColor]};
    position: relative;
`;
