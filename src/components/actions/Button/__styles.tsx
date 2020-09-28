import styled, { css } from 'styled-components';

import {
    FillButtonProps,
    OutlineButtonProps,
    GhostButtonProps,
    TextButtonProps,
} from './__types';
import { ButtonBase } from '../ButtonBase/BaseButton';

export const FillButton = styled(ButtonBase)<FillButtonProps>`
    border: none;
    ${({ theme, color }) => css`
        background-color: ${theme.actions[color].background.default};

        color: ${theme.actions[color].color.default};

        &:hover {
            background-color: ${theme.actions[color].background.hover};
            color: ${theme.actions[color].color.hover};
        }

        &:disabled {
        }
    `};
`;

export const GhostButton = styled(ButtonBase)<GhostButtonProps>`
    border: none;
    background: transparent;
    ${({ theme, color }) => css`
        color: ${theme.actions[color].background.default};

        &:hover {
            background-color: ${theme.actions[color].background.ghost};
        }

        &:disabled {
        }
    `};
`;

export const OutlineButton = styled(ButtonBase)<OutlineButtonProps>`
    background: transparent;
    ${({ theme, color }) => css`
        border: 1px solid ${theme.actions[color].border.default};
        color: ${theme.actions[color].border.default};

        &:hover {
            background-color: ${theme.actions[color].background.ghost};
        }

        &:disabled {
        }
    `};
`;

export const TextButton = styled(ButtonBase)<TextButtonProps>`
    background: transparent;
    ${({ theme, color }) => css`
        color: ${theme.actions[color].background.default};

        &:hover {
            opacity: 0.7;
        }

        &:disabled {
        }
    `};
`;
