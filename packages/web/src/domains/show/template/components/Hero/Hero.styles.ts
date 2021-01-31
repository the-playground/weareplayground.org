import styled from 'styled-components';
import { SectionWithBG } from '@nerve/core/components';
import { rgba } from 'polished';

import { spacing } from '@nerve/core/tokens';

export const Hero = styled(SectionWithBG)`
    align-items: stretch;
    display: flex;
    min-height: 100vh;
    position: relative;

    .content {
        align-items: center;
        display: flex;
        flex: 1;
        margin-top: -${spacing.component.xxl};
    }

    .title {
        text-transform: uppercase;
    }

    .author {
        margin-top: ${spacing.component.m};
    }

    .actions {
        bottom: 0;
        left: 0;
        padding: ${spacing.component.m} 0;
        position: absolute;
        width: 100%;
    }
`;
