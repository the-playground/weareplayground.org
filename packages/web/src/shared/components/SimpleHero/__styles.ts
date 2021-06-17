import styled from 'styled-components';

import { breakpoints, spacing } from '@web/ui/tokens';

export const SimpleHero = styled.section`
    padding: ${spacing.layout.m} 0;
    ${breakpoints.m} {
        padding: ${spacing.layout.xl} 0;
    }
    text-align: left;

    .title {
        margin-bottom: ${spacing.component.l};
        ${breakpoints.m} {
            margin-bottom: ${spacing.component.xs};
        }
    }

    .title,
    .sub-title {
        text-transform: lowercase;
    }
`;
