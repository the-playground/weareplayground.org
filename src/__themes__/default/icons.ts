import { IconTheme, IconThemes } from '../theme.d';
import { palette } from './__palette';

const light: IconTheme = {
    color: {
        default: palette.grey[100],
        hover: palette.grey[200],
    },
};
const medium: IconTheme = {
    color: {
        default: palette.grey[300],
        hover: palette.grey[400],
    },
};

const dark: IconTheme = {
    color: {
        default: palette.secondary.main,
        hover: palette.secondary.light,
    },
};

const accent: IconTheme = {
    color: {
        default: palette.primary.main,
        hover: palette.primary.dark,
    },
};

export const icons: IconThemes = {
    light,
    medium,
    dark,
    accent,
};
