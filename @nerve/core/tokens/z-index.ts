export enum zIndex {
    behind = -1,
    zero = 0,
    base = 1,
    front = 2,
    nav = 3,
    modal = 4,
    heaven = 5,
}

export type AvailableZIndices = typeof zIndex;
export type AvailableZIndex = keyof AvailableZIndices;
