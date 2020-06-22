import styled from 'styled-components';

import { animation, spacing } from '@tokens';

export const NavBar = styled.nav`
    ul {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        list-style: none;

        a:not(.button) {
            display: block;
            padding: ${spacing.component.s} ${spacing.component.m};
            position: relative;
            transition: ${animation.linkHover};
        }

        a.--is-active {
            opacity: 0.6;
        }

        a:hover:not(.button) {
            opacity: 0.6;
        }

        li.highlight {
            margin-left: ${spacing.component.s};
        }
    }
`;
