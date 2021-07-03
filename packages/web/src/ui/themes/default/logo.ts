import { palette } from './__palette';
import { LogoTheme, LogoThemes } from '../index.d';

const light: LogoTheme = {
    bracketColor: palette.primary.base,
    textColor: palette.neutral[100],
};

const dark: LogoTheme = {
    bracketColor: palette.primary.base,
    textColor: palette.secondary.base,
};

export const logo: LogoThemes = {
    light,
    dark,
};
