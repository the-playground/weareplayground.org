import styled from 'styled-components';

import { spacing } from '@tokens';

export const AuthorCard = styled.div`
    align-items: center;
    border-top: 1px solid ${({ theme }) => theme.palette.secondary.light};
    display: flex;
    padding: ${spacing.layout.m} 0;

    .media {
        border-radius: 50%;
        line-height: 0;
        margin-right: ${spacing.component.l};
        overflow: hidden;
    }

    .byline {
        position: relative;
        top: 6px;
    }

    .bio {
        margin-top: ${spacing.component.xxs};
    }

    .follow {
        margin-left: auto;
        margin-right: 0;
    }
`;
