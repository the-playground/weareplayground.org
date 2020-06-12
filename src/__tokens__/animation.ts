export enum animation {
    buttonHover = 'all .15s ease',
    linkHover = 'all .15s ease',
    cardHover = 'all .15s ease',
}

export type Animations = typeof animation;
export type AvailableAnimation = keyof Animations;
