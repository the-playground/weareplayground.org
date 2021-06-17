import styled from 'styled-components';

import { breakpoints, spacing } from '@web/core/tokens';

export const LegacyContentNotice = styled.div`
    .content {
        padding: ${spacing.layout.l} 0 ${spacing.layout.l};
        ${breakpoints.m} {
            padding: ${spacing.layout.xl} 0 ${spacing.layout.xl};
        }
    }

    .divider {
        background-color: ${(props) => props.theme.palette.primary.base};
        display: block;
        height: 1px;
        margin-bottom: ${spacing.layout.s};
        margin-top: ${spacing.layout.xs};
        width: 100%;
    }

    .progress-text {
        margin-bottom: ${spacing.component.m};
    }

    .action {
        margin-top: ${spacing.component.xxl};
    }
`;
