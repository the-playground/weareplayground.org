import styled from 'styled-components';

import { spacing } from '@nerve/core/tokens';

export const ListItem = styled.li`
    a,
    button {
        overflow: hidden;

        i {
            margin-right: ${spacing.component.s};
        }
    }

    a:hover,
    button:hover {
        background-color: ${({ theme }) =>
            theme.actions.tertiary.background.hover};
    }
`;
