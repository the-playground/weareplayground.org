export enum elevation {
    e0 = '',
    e1 = '',
    e2 = '',
    e3 = '',
    e4 = '',
}

export type AvailableElevations = typeof elevation;
export type AvailableElevation = keyof AvailableElevations;
