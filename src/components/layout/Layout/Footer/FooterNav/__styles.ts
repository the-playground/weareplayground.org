import styled from 'styled-components';
import { animation, breakpoints, spacing } from '@tokens';

const footerBreakpoint = breakpoints.s;

export const FooterNav = styled.nav`
    ${footerBreakpoint} {
        display: flex;
    }

    ul {
        list-style: none;
    }

    li {
        a {
            padding: ${spacing.component.xxs} 0;
        }
    }

    a {
        display: block;
    }

    a:hover {
    }

    a.--is-active {
    }

    .brand {
        margin-bottom: ${spacing.layout.xs};
        ${footerBreakpoint} {
            margin-right: ${spacing.layout.m};
            margin-bottom: 0;
        }
    }

    .menus {
        ${footerBreakpoint} {
            flex: 1 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .menu:not(:last-child) {
        margin-bottom: ${spacing.layout.s};
        ${footerBreakpoint} {
            margin-bottom: 0;
        }
    }

    .menu-title {
        margin-bottom: ${spacing.component.m};
    }

    .company {
        margin-bottom: ${spacing.component.m};
    }
`;
