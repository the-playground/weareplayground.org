import { rgba } from 'polished';
import { OverlayTheme, OverlayThemes } from '../index.d';
import { palette } from './__palette';

const verticalGradientDark: OverlayTheme = {
    color: `linear-gradient(
            0deg,
            ${rgba(palette.secondary.d1, 0.8)} 15%,
            ${rgba(palette.secondary.d1, 0.4)} 50%
        )`,
};

const black45: OverlayTheme = {
    color: `${rgba(palette.system.black, 0.45)}`,
};

const black65: OverlayTheme = {
    color: `${rgba(palette.system.black, 0.65)}`,
};

const black85: OverlayTheme = {
    color: `${rgba(palette.system.black, 0.85)}`,
};

const dark45: OverlayTheme = {
    color: `${rgba(palette.secondary.d1, 0.45)}`,
};

const dark55: OverlayTheme = {
    color: `${rgba(palette.secondary.d1, 0.55)}`,
};

const dark65: OverlayTheme = {
    color: `${rgba(palette.secondary.d1, 0.65)}`,
};

const dark85: OverlayTheme = {
    color: `${rgba(palette.secondary.d1, 0.85)}`,
};

const dark90: OverlayTheme = {
    color: `${rgba(palette.secondary.d1, 0.9)}`,
};

export const overlays: OverlayThemes = {
    verticalGradientDark,
    black45,
    black65,
    black85,
    dark45,
    dark55,
    dark65,
    dark85,
    dark90,
};
