import { PaletteColor, Grey, SystemColors } from './colorPalette.d';

const orange: PaletteColor = {
    light: '#FA7223',
    main: '#F25C05',
    dark: '#D75204',
};

const blue: PaletteColor = {
    extraLight: '#173A5F',
    light: '#122D4A',
    main: '#0C1E31',
    dark: '#07121D',
};

const grey: Grey = {
    100: '#F2F2F3',
    200: '#D6D6D9',
    300: '#A2A2A9',
    400: '#888891',
    500: '#67676F',
    600: '#343438',
};

const system: SystemColors = {
    black: '#000000',
    white: '#FFFFFF',
};

export const brandColors = {
    orange,
    blue,
    grey,
    system,
};
