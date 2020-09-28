import { ArrowDown } from './defs/ArrowDown';
import { ArrowLeft } from './defs/ArrowLeft';
import { ArrowRight } from './defs/ArrowRight';
import { ArrowUp } from './defs/ArrowUp';
import { Calendar } from './defs/Calendar';
import { Cancel } from './defs/Cancel';
import { CircleDown } from './defs/CircleDown';
import { CircleLeft } from './defs/CircleLeft';
import { CircleRight } from './defs/CircleRight';
import { CircleUp } from './defs/CircleUp';
import { Facebook } from './defs/Facebook';
import { Fire } from './defs/Fire';
import { Github } from './defs/Github';
import { Info } from './defs/Info';
import { Instagram } from './defs/Instagram';
import { Location } from './defs/Location';
import { Lock } from './defs/Lock';
import { Next } from './defs/Next';
import { Previous } from './defs/Previous';
import { Rocket } from './defs/Rocket';
import { Spotify } from './defs/Spotify';
import { Ticket } from './defs/Ticket';
import { Warning } from './defs/Warning';
import { Youtube } from './defs/Youtube';

export const availableIcons = {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    Calendar,
    Cancel,
    CircleDown,
    CircleLeft,
    CircleRight,
    CircleUp,
    Facebook,
    Fire,
    Github,
    Info,
    Instagram,
    Location,
    Lock,
    Next,
    Previous,
    Rocket,
    Spotify,
    Ticket,
    Warning,
    Youtube,
};

export type IconDefinition = {
    viewBox: string;
    path: JSX.Element;
};

export type AvailableIcons = typeof availableIcons;
export type AvailableIconName = keyof AvailableIcons;
