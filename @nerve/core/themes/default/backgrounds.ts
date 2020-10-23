import { BackgroundTheme, BackgroundThemes } from '../theme.d';
import { palette } from './__palette';

const light: BackgroundTheme = {
    color: palette.grey[100],
};
const medium: BackgroundTheme = {
    color: palette.grey[400],
};

const dark: BackgroundTheme = {
    color: palette.secondary.main,
};

const extraDark: BackgroundTheme = {
    color: palette.secondary.dark,
};

const accent: BackgroundTheme = {
    color: palette.primary.main,
};

export const backgrounds: BackgroundThemes = {
    light,
    medium,
    dark,
    extraDark,
    accent,
};
