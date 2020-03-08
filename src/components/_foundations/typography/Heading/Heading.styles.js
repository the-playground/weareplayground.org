import styled from 'styled-components';
import { typography } from '../../../../__tokens__';

export const headingColors = {
    dark: ``,
    light: ``,
    // dark: props => props.theme.ui.typography.dark,
    // light: props => props.theme.ui.typography.light,
};

export const headingSizes = {
    xl: typography.heading.XLarge,
    l: typography.heading.Large,
    m: typography.heading.Medium,
    s: typography.heading.Small,
};

export const Heading = styled.div`
    ${props => headingSizes[props.size]};

    ${props => props.isUppercase && `text-transform: uppercase;`}
    ${props => props.isLowercase && `text-transform: lowercase;`}
`;
/* color: ${props => commonTextColors[props.color]}; */
