import { palette } from './__palette';
import { LogoTheme, LogoThemes } from '../index.d';

const light: LogoTheme = {
    bracketColor: palette.primary.main,
    textColor: palette.system.white,
};

const dark: LogoTheme = {
    bracketColor: palette.primary.main,
    textColor: palette.secondary.main,
};

export const logo: LogoThemes = {
    light,
    dark,
};
