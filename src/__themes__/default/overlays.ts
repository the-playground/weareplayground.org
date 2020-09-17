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

export const overlays: OverlayThemes = {
    verticalGradientDark,
};
