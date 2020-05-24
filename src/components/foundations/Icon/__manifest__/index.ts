import Example from './defs/Example';

export const availableIcons = {
    Example,
};

export type IconDefinition = {
    size: string;
    viewBox: string;
    path: JSX.Element;
};

export type AvailableIcon = {
    [K in 's' | 'm' | 'l' | 'xl']?: IconDefinition;
};

export type AvailableIcons = typeof availableIcons;
export type AvailableIconName = keyof AvailableIcons;
