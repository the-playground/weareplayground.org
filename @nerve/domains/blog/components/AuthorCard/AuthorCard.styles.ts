import styled from 'styled-components';

import { breakpoints, spacing } from '@nerve/core/tokens';

const componentBreakpoint = breakpoints.s;

export const AuthorCard = styled.div`
    align-items: center;
    border-top: 1px solid ${({ theme }) => theme.palette.secondary.light};
    display: flex;
    flex-direction: column;
    padding: ${spacing.layout.m} 0;
    text-align: center;

    ${componentBreakpoint} {
        flex-direction: row;
        text-align: left;
    }

    .media {
        border-radius: 50%;
        line-height: 0;
        overflow: hidden;
        margin-bottom: ${spacing.component.s};

        ${componentBreakpoint} {
            margin-bottom: 0;
            margin-right: ${spacing.component.l};
        }
    }

    .byline {
        position: relative;
    }

    .bio {
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
