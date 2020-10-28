export const grid = {
    fluid: '100%',
    l: '1200px',
    m: '960px',
    s: '768px',
    xs: '568px',
};

export type GridSizes = typeof grid;
export type AvailableGridSize = keyof GridSizes;
