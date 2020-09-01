import { palette } from './__palette';
import { LogoTheme, LogoThemes } from '../theme';

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
