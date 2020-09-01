import { brandColors } from '../brandColors';

import { Palette } from '../colorPalette.d';

export const palette: Palette = {
    primary: {
        light: brandColors.orange.light,
        main: brandColors.orange.main,
        dark: brandColors.orange.dark,
    },
    secondary: {
        light: brandColors.blue.light,
        main: brandColors.blue.main,
        dark: brandColors.blue.dark,
    },
    danger: {
        dark: '#DF3005',
        main: '#F23405',
        light: '#FA3F11',
    },
    grey: brandColors.grey,
    system: brandColors.system,
    typography: {
        light: brandColors.grey[100],
        medium: brandColors.grey[300],
        dark: brandColors.blue.main,
        accent: brandColors.orange.main,
        danger: '#F23405',
    },
};
