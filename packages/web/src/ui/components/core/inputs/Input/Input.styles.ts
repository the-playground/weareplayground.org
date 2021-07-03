import styled from 'styled-components';
import { borders, spacing, typography } from '@web/ui/tokens';
import { InputProps } from './Input.d';

export const Input = styled.div<Pick<InputProps, 'color'>>`
    > input {
        background: ${({ color, theme }) =>
            theme.inputs[color].background.default};
        border: 1px solid
            ${({ color, theme }) => theme.inputs[color].border.default};
        border-radius: ${borders.defaultRadius};
        color: ${({ color, theme }) => theme.inputs[color].color.default};
        padding: ${spacing.component.m};
        width: 100%;
        ${typography.bodyText.m};

        &:focus {
            border: 1px solid
                ${({ color, theme }) => theme.inputs[color].border.focus};
            outline: none;
        }

        &::placeholder {
            color: ${({ color, theme }) =>
                theme.inputs[color].color.placeholder};
        }
    }
`;
