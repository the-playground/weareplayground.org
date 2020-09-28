import styled from 'styled-components';
import { spacing } from '@tokens';
import { InputProps } from './Input.d';

export const Input = styled.div<Pick<InputProps, 'color'>>`
    > input {
        background: ${({ color, theme }) =>
            theme.inputs[color].background.default};
        border: 1px solid
            ${({ color, theme }) => theme.inputs[color].border.default};

        padding: ${spacing.component.m};

        &:focus {
            border: 1px solid
                ${({ color, theme }) => theme.inputs[color].border.focus};
        }
    }
`;
