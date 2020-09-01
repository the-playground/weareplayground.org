import { palette } from './__palette';
import { ActionTheme, ActionThemes } from '../theme.d';

const primary: ActionTheme = {
    color: {
        default: palette.typography.light,
    },
    background: {
        default: palette.primary.main,
        hover: palette.primary.dark,
    },
    border: {
        default: palette.primary.main,
        hover: palette.primary.dark,
    },
};

const secondary: ActionTheme = {
    color: {
        default: palette.typography.light,
    },
    background: {
        default: palette.secondary.main,
        hover: palette.secondary.light,
    },
    border: {
        default: palette.secondary.main,
        hover: palette.secondary.light,
    },
};

const tertiary: ActionTheme = {
    color: {
        default: palette.typography.dark,
    },
    background: {
        default: palette.grey[100],
        hover: palette.grey[200],
    },
    border: {
        default: palette.grey[100],
        hover: palette.grey[200],
    },
};

const danger: ActionTheme = {
    color: {
        default: palette.typography.light,
    },
    background: {
        default: palette.danger.main,
        hover: palette.danger.dark,
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
