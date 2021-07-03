export interface SystemColors {
    black: string;
    white: string;
}

export interface Neutral {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
}

export interface PaletteColor {
    l2: string;
    l1: string;
    base: string;
    d1: string;
    d2: string;
}

export interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    danger: PaletteColor;
    success: PaletteColor;
    neutral: Neutral;
    system: SystemColors;
}
