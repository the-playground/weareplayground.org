import styled from 'styled-components';

import { animation, appNavBreakpoint, spacing, zIndex } from '@tokens';

import { HeaderProps } from './__types';

export const Header = styled.header<HeaderProps>`
    display: block;
    padding: ${spacing.component.s} 0;

    ${appNavBreakpoint} {
        left: 0;
        padding: ${spacing.component.m} 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: ${zIndex.base};
    }

    .container {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    .brand {
        transition: ${animation.linkHover};
        svg {
            width: 125px;
            ${appNavBreakpoint} {
                width: 150px;
            }
        }
    }

    .brand.--is-active {
        pointer-events: none;
    }

    .brand:hover {
        opacity: 0.7;
    }

    [data-nav-scope='desktop'] {
        display: none;
        ${appNavBreakpoint} {
            display: initial;
        }
    }
`;
