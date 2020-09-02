export interface SystemColors {
    black: string;
    white: string;
}

export interface Grey {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
}

export interface PaletteColor {
    extraLight?: string;
    light: string;
    main: string;
    dark: string;
    extraDark?: string;
}

export interface TypographyPalette {
    light: string;
    medium: string;
    dark: string;
    accent: string;
    danger: string;
}

export type AvailableTypographyPalette = keyof TypographyPalette;

export interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    danger: PaletteColor;
    grey: Grey;
    system: SystemColors;
    typography: TypographyPalette;
}
