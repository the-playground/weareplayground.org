import styled from 'styled-components';

import { animation, breakpoints, spacing } from '@web/ui/tokens';

export const Footer = styled.footer`
    .footer-container {
        padding: ${spacing.layout.m} 0;
        ${breakpoints.s} {
            padding: ${spacing.layout.l} 0;
        }
    }

    a {
        transition: ${animation.linkHover};
    }

    li a.--is-active {
        opacity: 0.7;
    }

    a:hover {
        opacity: 0.7;
    }
`;
