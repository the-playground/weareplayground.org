import styled from 'styled-components';

import { breakpoints, spacing } from '@tokens';

export const Copyright = styled.div`
    background-color: var(--blueD1);
    border-top: 1px solid ${({ theme }) => theme.palette.secondary.light};
    padding: ${spacing.component.l} 0;

    .container {
        display: flex;
        flex-direction: column-reverse;
        ${breakpoints.s} {
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    .links {
        list-style: none;
        display: flex;
        margin-bottom: ${spacing.layout.xs};
        ${breakpoints.s} {
            margin-left: ${spacing.layout.l};
            margin-bottom: 0;
        }

        li {
            position: relative;
        }
    }

    .links li:not(:last-child) {
        padding-right: ${spacing.component.xs};

        &:after {
            background-color: ${(props) => props.theme.typography.accent};
            content: '';
            display: block;
            height: 16px;
            position: absolute;
            top: 8px;
            right: 0;
            width: 1px;
            opacity: 0.4;
        }
    }

    .links li:not(:first-child) {
        padding-left: ${spacing.component.xs};
    }
`;
