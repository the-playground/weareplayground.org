import styled from 'styled-components';

import { animation, appNavBreakpoint, spacing } from '@tokens';

export const Header = styled.header`
    padding: ${spacing.component.m} 0;

    .container {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    .brand {
        transition: ${animation.linkHover};
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
