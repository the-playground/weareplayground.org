import { Facebook } from './defs/Facebook';
import { Github } from './defs/Github';
import { Instagram } from './defs/Instagram';
import { Spotify } from './defs/Spotify';
import { Youtube } from './defs/Youtube';

export const availableIcons = {
    Facebook,
    Github,
    Instagram,
    Spotify,
    Youtube,
};

export type IconDefinition = {
    viewBox: string;
    path: JSX.Element;
};

export type AvailableIcons = typeof availableIcons;
export type AvailableIconName = keyof AvailableIcons;
