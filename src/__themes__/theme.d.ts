import { FlattenSimpleInterpolation } from 'styled-components';
import { Palette, TypographyPalette } from './palette';

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
        ghost?: string;
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
        inverted?: string;
    };
}

export interface BackgroundTheme {
    color: string;
}

export interface InputTheme {
    background: {
        default: string;
        focus?: string;
    };
    border: {
        default: string;
        focus?: string;
    };
    color: {
        default: string;
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

export interface OverlayTheme {
    color: string | FlattenSimpleInterpolation;
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
        extraDark: BackgroundTheme;
        accent: BackgroundTheme;
    };
    icons: {
        light: IconTheme;
        medium: IconTheme;
        dark: IconTheme;
        accent: IconTheme;
    };
    inputs: {
        light: InputTheme;
        dark: InputTheme;
    };
    logo: {
        light: LogoTheme;
        dark: LogoTheme;
    };
    overlays: {
        verticalGradientDark: OverlayTheme;
        secondary75: OverlayTheme;
    };
    typography: TypographyPalette;
}

// Props that later will be injected by styled-components
export type ThemeProps = { theme?: AppTheme };

/**
 * Export types for each contained section of our theme.This allows for better
 * re-usability across components.
 */

export * from './palette';

export type ActionThemes = AppTheme['actions'];
export type AvailableActionTheme = keyof ActionThemes;

export type BackgroundThemes = AppTheme['backgrounds'];
export type AvailableBackgroundTheme = keyof BackgroundThemes;

// export type InputThemes = AppTheme['inputs'];
// export type AvailableInputTheme = keyof InputThemes;

export type IconThemes = AppTheme['icons'];
export type AvailableIconTheme = keyof IconThemes;

export type InputThemes = AppTheme['inputs'];
export type AvailableInputTheme = keyof InputThemes;

export type LogoThemes = AppTheme['logo'];
export type AvailableLogoTheme = keyof LogoThemes;

export type OverlayThemes = AppTheme['overlays'];
export type AvailableOverlayTheme = keyof OverlayThemes;

export type TypographyThemes = AppTheme['typography'];
export type AvailableTypographyTheme = keyof TypographyThemes;
