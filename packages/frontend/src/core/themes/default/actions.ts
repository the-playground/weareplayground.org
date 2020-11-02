import { rgba } from 'polished';
import { palette } from './__palette';
import { typography } from './__typography';
import { ActionTheme, ActionThemes } from '../index.d';

const primary: ActionTheme = {
    color: {
        default: typography.light,
        inverted: typography.dark,
    },
    background: {
        default: palette.primary.base,
        hover: palette.primary.d1,
        ghost: rgba(palette.primary.base, 0.2),
    },
    border: {
        default: palette.primary.base,
        hover: palette.primary.d1,
    },
};

const secondary: ActionTheme = {
    color: {
        default: typography.light,
        inverted: typography.dark,
    },
    background: {
        default: palette.secondary.base,
        hover: palette.secondary.l1,
        ghost: rgba(palette.secondary.base, 0.2),
    },
    border: {
        default: palette.secondary.base,
        hover: palette.secondary.l1,
    },
};

const tertiary: ActionTheme = {
    color: {
        default: typography.dark,
        inverted: typography.light,
    },
    background: {
        default: palette.neutral[200],
        hover: palette.neutral[300],
        ghost: rgba(palette.neutral[200], 0.2),
    },
    border: {
        default: palette.neutral[200],
        hover: palette.neutral[300],
    },
};

const danger: ActionTheme = {
    color: {
        default: typography.light,
        inverted: typography.dark,
    },
    background: {
        default: palette.danger.base,
        hover: palette.danger.d1,
        ghost: rgba(palette.danger.base, 0.2),
    },
    border: {
        default: palette.danger.base,
        hover: palette.danger.d1,
    },
};

export const actions: ActionThemes = {
    primary,
    secondary,
    tertiary,
    danger,
};
