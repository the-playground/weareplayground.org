import styled from 'styled-components';
import { SectionProps } from './Section.d';

// Note that a custom background color will always take presedence if defined
export const Section = styled.section<SectionProps>`
    background-color: ${({ theme, bgColor }) =>
        bgColor && theme.surfaces[bgColor]};
    position: relative;
`;
