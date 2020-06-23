import styled from 'styled-components';

import { animation, spacing } from '@tokens';

export const DesktopNavBar = styled.nav`
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
            position: relative;

            &:before {
                color: var(--typeAccent);
                content: '[';
                left: 2px;
                position: absolute;
            }

            > span {
                opacity: 0.6;
            }
        }

        a:hover:not(.button) > span {
            opacity: 0.6;
        }

        li.highlight {
            margin-left: ${spacing.component.s};
        }
    }
`;
