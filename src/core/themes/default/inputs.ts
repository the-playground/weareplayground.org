import { palette } from './__palette';
import { InputTheme, InputThemes } from '../index.d';

const light: InputTheme = {
    background: {
        default: palette.neutral[100],
    },
    border: {
        default: palette.neutral[200],
        focus: palette.primary.base,
    },
    color: {
        default: palette.secondary.d1,
        placeholder: palette.neutral[500],
    },
};

const dark: InputTheme = {
    background: {
        default: palette.secondary.d1,
        focus: palette.secondary.d2,
    },
    border: {
        default: palette.neutral[400],
        focus: palette.primary.base,
    },
    color: {
        default: palette.neutral[100],
        placeholder: palette.secondary.l1,
    },
};

export const inputs: InputThemes = {
    light,
    dark,
};
