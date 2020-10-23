import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { zIndex } from '@nerve/core/tokens';
import { SectionProps } from './__types';

export const SectionWithBackgroundImage = styled(BackgroundImage)<SectionProps>`
    background-position: ${({ bgPosition }) => bgPosition} !important;
    > .content {
        position: relative;
        z-index: ${zIndex.front};
    }
`;

export const Section = styled.section<SectionProps>`
    background: ${({ theme, bgColor }) =>
        bgColor && theme.backgrounds[bgColor].color};
    position: relative;
`;
