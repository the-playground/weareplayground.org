import { BackgroundTheme, BackgroundThemes } from '../theme.d';
import { palette } from './__palette';

const light: BackgroundTheme = {
    solid: palette.grey[100],
};
const medium: BackgroundTheme = {
    solid: palette.secondary.main,
};

const dark: BackgroundTheme = {
    solid: palette.secondary.dark,
};

const accent: BackgroundTheme = {
    solid: palette.primary.main,
};

export const backgrounds: BackgroundThemes = {
    light,
    medium,
    dark,
    accent,
};
