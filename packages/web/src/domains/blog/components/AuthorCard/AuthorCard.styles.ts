import styled from 'styled-components';

import { breakpoints, spacing } from '@web/ui/tokens';

const componentBreakpoint = breakpoints.s;

export const AuthorCard = styled.div`
    align-items: center;
    border-top: 1px solid ${({ theme }) => theme.palette.secondary.l1};
    display: flex;
    flex-direction: column;
    padding: ${spacing.layout.m} 0;
    text-align: center;

    ${componentBreakpoint} {
        flex-direction: row;
        text-align: left;
    }

    .avatar {
        margin-bottom: ${spacing.component.s};

        ${componentBreakpoint} {
            margin-bottom: 0;
            margin-right: ${spacing.component.l};
        }
    }

    .byline {
        position: relative;
    }

    .brief {
        margin-top: ${spacing.component.s};
    }

    .follow {
        margin-top: ${spacing.component.m};

        ${componentBreakpoint} {
            margin-left: auto;
            margin-right: 0;
            margin-top: 0;
        }
    }
`;
