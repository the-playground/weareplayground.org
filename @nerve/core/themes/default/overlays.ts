import { rgba } from 'polished';
import { OverlayTheme, OverlayThemes } from '../theme.d';
import { palette } from './__palette';

const verticalGradientDark: OverlayTheme = {
    color: `linear-gradient(
            0deg,
            ${rgba(palette.secondary.dark, 0.8)} 15%,
            ${rgba(palette.secondary.dark, 0.4)} 50%
        )`,
};

const dark85: OverlayTheme = {
    color: `${rgba(palette.secondary.dark, 0.85)}`,
};

const dark90: OverlayTheme = {
    color: `${rgba(palette.secondary.dark, 0.9)}`,
};

export const overlays: OverlayThemes = {
    verticalGradientDark,
    dark85,
    dark90,
};
