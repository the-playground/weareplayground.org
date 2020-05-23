import Example from './defs/Example';

export const availableIcons = {
    Example,
};

export type AvailableIcons = typeof availableIcons;
export type AvailableIconName = keyof AvailableIcons;
