import styled from 'styled-components';

import { spacing } from '@tokens';

export const Footer = styled.footer`
    background-color: var(--blue);

    .footer-container {
        padding: ${spacing.layout.l} 0;
    }
`;
/* color: ${props => commonTextColors[props.color]}; */
