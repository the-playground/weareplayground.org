import styled from 'styled-components';

import { spacing } from '@tokens';

export const Copyright = styled.div`
    background-color: var(--blueD1);
    padding: ${spacing.component.l} 0;

    .container {
        align-items: center;
        display: flex;
    }

    ul {
        list-style: none;
        display: flex;
        margin-left: ${spacing.layout.l};
    }

    a {
        padding: ${spacing.component.s};
    }
`;
