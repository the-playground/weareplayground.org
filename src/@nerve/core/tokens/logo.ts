export enum logoSizes {
    s = '50px',
    m = '75px',
    l = '100px',
    xl = '150px',
}

export type LogoSizes = typeof logoSizes;
export type AvailableLogoSize = keyof LogoSizes;
