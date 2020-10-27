import { rgba } from 'polished';
import { palette } from './__palette';
import { ActionTheme, ActionThemes } from '../index.d';

const primary: ActionTheme = {
    color: {
        default: palette.typography.light,
        inverted: palette.typography.dark,
    },
    background: {
        default: palette.primary.main,
        hover: palette.primary.dark,
        ghost: rgba(palette.primary.main, 0.2),
    },
    border: {
        default: palette.primary.main,
        hover: palette.primary.dark,
    },
};

const secondary: ActionTheme = {
    color: {
        default: palette.typography.light,
        inverted: palette.typography.dark,
    },
    background: {
        default: palette.secondary.main,
        hover: palette.secondary.light,
        ghost: rgba(palette.secondary.main, 0.2),
    },
    border: {
        default: palette.secondary.main,
        hover: palette.secondary.light,
    },
};

const tertiary: ActionTheme = {
    color: {
        default: palette.typography.dark,
        inverted: palette.typography.light,
    },
    background: {
        default: palette.grey[100],
        hover: palette.grey[200],
        ghost: rgba(palette.grey[100], 0.2),
    },
    border: {
        default: palette.grey[100],
        hover: palette.grey[200],
    },
};

const danger: ActionTheme = {
    color: {
        default: palette.typography.light,
        inverted: palette.typography.dark,
    },
    background: {
        default: palette.danger.main,
        hover: palette.danger.dark,
        ghost: rgba(palette.danger.main, 0.2),
    },
    border: {
        default: palette.danger.main,
        hover: palette.danger.dark,
    },
};

export const actions: ActionThemes = {
    primary,
    secondary,
    tertiary,
    danger,
};
