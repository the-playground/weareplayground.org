import { OverlayTheme, OverlayThemes } from '../theme.d';
import { palette } from './__palette';

const verticalGradientDark: OverlayTheme = {
    color: `linear-gradient(
            0deg,
            rgba(7, 18, 29, 0.7) 15%,
            rgba(7, 18, 29, 0) 100%
        )`,
};

export const overlays: OverlayThemes = {
    verticalGradientDark,
};
