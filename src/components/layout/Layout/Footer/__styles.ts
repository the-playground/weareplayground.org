import styled from 'styled-components';

import { animation, breakpoints, spacing } from '@tokens';

export const Footer = styled.footer`
    background-color: var(--blue);

    .footer-container {
        padding: ${spacing.layout.m} 0;
        ${breakpoints.s} {
            padding: ${spacing.layout.l} 0;
        }
    }

    a {
        transition: ${animation.linkHover};
    }

    a.--is-active {
        opacity: 0.7;
    }

    a:hover {
        opacity: 0.7;
    }
`;
