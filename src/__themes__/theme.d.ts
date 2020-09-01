import { Palette, TypographyPalette } from './colorPalette';

/**
 * This file contains Typescript typings for all of our
 * theme properties. This allows us to do some really cool things,
 * like inferring available options in a components based on a
 * theme property.
 */

/**
 * Actions Themes
 */
export interface ActionTheme {
    background: {
        default: string;
        hover?: string;
        active?: string;
        disabled?: string;
    };
    border: {
        default: string;
        hover?: string;
        active?: string;
        disabled?: string;
    };
    color: {
        default: string;
        hover?: string;
        active?: string;
        disabled?: string;
    };
}

export interface BackgroundTheme {
    solid?: string;
    overlay?: string;
}

export interface InputTheme {
    background: {
        default: string;
        hover?: string;
        focus?: string;
    };
    border: {
        default: string;
        hover?: string;
        focus?: string;
    };
    color: {
        default: string;
        hover?: string;
        focus?: string;
        placeholder?: string;
    };
}

export interface IconTheme {
    color: {
        default: string;
        hover?: string;
        hoverOpacity?: number;
    };
}

export interface LogoTheme {
    bracketColor: string;
    textColor: string;
}

export interface AppTheme {
    palette: Palette;
    actions: {
        primary: ActionTheme;
        secondary: ActionTheme;
        tertiary: ActionTheme;
        danger: ActionTheme;
    };
    backgrounds: {
        light: BackgroundTheme;
        medium: BackgroundTheme;
        dark: BackgroundTheme;
        accent: BackgroundTheme;
    };
    // inputs: {
    //     light: InputTheme;
    //     medium: InputTheme;
    //     dark: InputTheme;
    // };
    logo: {
        light: LogoTheme;
        dark: LogoTheme;
    };
    icons: {
        light: IconTheme;
        medium: IconTheme;
        dark: IconTheme;
        accent: IconTheme;
    };
    typography: TypographyPalette;
}

// Props that later will be injected by styled-components
export type ThemeProps = { theme?: AppTheme };

/**
 * Export types for each contained section of our theme.This allows for better
 * re-usability across components.
 */

export * from './colorPalette';

export type ActionThemes = AppTheme['actions'];
export type AvailableActionTheme = keyof ActionThemes;

export type BackgroundThemes = AppTheme['backgrounds'];
export type AvailableBackgroundTheme = keyof BackgroundThemes;

// export type InputThemes = AppTheme['inputs'];
// export type AvailableInputTheme = keyof InputThemes;

export type IconThemes = AppTheme['icons'];
export type AvailableIconTheme = keyof IconThemes;

export type LogoThemes = AppTheme['logo'];
export type AvailableLogoTheme = keyof LogoThemes;

export type TypographyThemes = AppTheme['typography'];
export type AvailableTypographyTheme = keyof TypographyThemes;
