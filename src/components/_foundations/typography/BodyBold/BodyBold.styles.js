import styled from 'styled-components';
import { typography } from '../../../../__tokens__';

export const bodyBoldColors = {
    dark: ``,
    light: ``,
    // dark: props => props.theme.ui.typography.dark,
    // light: props => props.theme.ui.typography.light,
};

export const bodyBoldSizes = {
    xl: typography.bodyBold.XLarge,
    l: typography.bodyBold.Large,
    m: typography.bodyBold.Medium,
    s: typography.bodyBold.Small,
};

export const BodyBold = styled.p`
    ${props => bodyBoldSizes[props.size]};
`;
/* color: ${props => commonTextColors[props.color]}; */
