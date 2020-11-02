import { palette } from './__palette';
import { Surfaces } from '../index.d';

export const surfaces: Surfaces = {
    default: palette.secondary.d1,

    paperAccent: palette.secondary.l2,
    paperLight: palette.secondary.l1,
    paper: palette.secondary.base,
    paperDark: palette.secondary.d2,

    neutralLight: palette.neutral[200],
    neutral: palette.neutral[500],
    neutralDark: palette.neutral[700],
};
