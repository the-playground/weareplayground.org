import styled from 'styled-components';

import { animation, spacing } from '@tokens';

export const NavBar = styled.nav`
    ul {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        list-style: none;

        a {
            display: block;
            padding: ${spacing.component.s} ${spacing.component.m};
        }
    }
`;
