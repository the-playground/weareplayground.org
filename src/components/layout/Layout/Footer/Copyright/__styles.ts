import styled from 'styled-components';

import { breakpoints, spacing } from '@tokens';

export const Copyright = styled.div`
    background-color: var(--blueD1);
    padding: ${spacing.component.l} 0;

    .container {
        display: flex;
        flex-direction: column-reverse;
        ${breakpoints.s} {
            align-items: center;
            flex-direction: row;
        }
    }

    ul {
        list-style: none;
        display: flex;
        margin-bottom: ${spacing.layout.xs};
        ${breakpoints.s} {
            margin-left: ${spacing.layout.l};
            margin-bottom: 0;
        }
    }
`;
