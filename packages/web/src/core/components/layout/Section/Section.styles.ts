import styled from 'styled-components';
import { zIndex } from '@nerve/core/tokens';
import { SectionProps } from './Section.d';

export const SectionWithBackgroundImage = styled.section<SectionProps>`
    > .content {
        position: relative;
        z-index: ${zIndex.front};
    }
`;

export const Section = styled.section<SectionProps>`
    background: ${({ theme, bgColor }) => bgColor && theme.surfaces[bgColor]};
    position: relative;
`;
