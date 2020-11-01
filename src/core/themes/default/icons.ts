import { IconTheme, IconThemes } from '../index.d';
import { palette } from './__palette';

const light: IconTheme = {
    color: {
        default: palette.neutral[200],
        hover: palette.neutral[300],
    },
};

const medium: IconTheme = {
    color: {
        default: palette.neutral[400],
        hover: palette.neutral[500],
    },
};

const dark: IconTheme = {
    color: {
        default: palette.secondary.base,
        hover: palette.secondary.l1,
    },
};

const accent: IconTheme = {
    color: {
        default: palette.primary.base,
        hover: palette.primary.d1,
    },
};

export const icons: IconThemes = {
    light,
    medium,
    dark,
    accent,
};
