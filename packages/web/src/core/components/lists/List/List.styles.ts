import styled, { css } from 'styled-components';
import { spacing } from '@nerve/core/tokens';
import { IList } from './List.d';

export const List = styled.ul<IList>`
    display: flex;
    flex-direction: column;
    list-style: none;

    .heading {
        ${({ headingSpacing, gutter }) => css`
            padding: ${spacing.component[headingSpacing!]}
                ${spacing.component[gutter!]};
        `}
    }

    li > div,
    li > a,
    li > button {
        align-items: center;
        display: flex;
        width: 100%;
        ${({ gutter, itemSpacing, disablePadding }) => css`
            padding: ${disablePadding ? 0 : spacing.component[itemSpacing!]}
                ${spacing.component[gutter!]};
        `};
    }
`;
