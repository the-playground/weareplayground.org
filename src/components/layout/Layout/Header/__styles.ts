import styled from 'styled-components';

import { spacing } from '@tokens';

export const Header = styled.header`
    padding: ${spacing.component.m} 0;

    .container {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
`;
