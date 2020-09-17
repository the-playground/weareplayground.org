import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { zIndex } from '@tokens';
import { SectionProps } from './__types';

export const SectionWithBackgroundImage = styled(BackgroundImage)<SectionProps>`
    background-size: cover;
    background-position: ${(props) => props.bgPosition};
    position: relative;
    > .content {
        position: relative;
        z-index: ${zIndex.front};
    }
`;

export const Section = styled.section<SectionProps>`
    background: ${(props) => props.theme.backgrounds[props.bgColor].color};
    position: relative;
`;
