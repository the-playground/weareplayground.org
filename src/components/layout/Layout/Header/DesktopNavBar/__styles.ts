import styled from 'styled-components';

import { animation, spacing } from '@tokens';

export const DesktopNavBar = styled.nav`
    ul {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        list-style: none;

        /* Standard link items (bot button links) */
        a:not(.button) {
            display: block;
            padding: ${spacing.component.s} ${spacing.component.m};
            position: relative;
            transition: ${animation.linkHover};
        }

        /* Current page link item text */
        a.--is-active > span {
            opacity: 0.6;
        }

        /* Control hover effect on the text of all non-button menu links */
        a:hover:not(.button) > span {
            opacity: 0.6;
        }

        /* A special list item that usually contains an important button within (i.e. donate). */
        li.highlight {
            margin-left: ${spacing.component.s};
        }
    }
`;
