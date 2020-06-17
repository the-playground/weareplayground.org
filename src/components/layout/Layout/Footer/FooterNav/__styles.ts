import styled from 'styled-components';
import { animation, spacing } from '@tokens';

export const FooterNav = styled.nav`
    display: flex;

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
        margin-right: ${spacing.layout.m};
    }

    .menus {
        flex: 1 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .menu-title {
        margin-bottom: ${spacing.component.m};
    }

    .company {
        margin-bottom: ${spacing.component.m};
    }
`;
