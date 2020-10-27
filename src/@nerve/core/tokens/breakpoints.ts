// These are all the breakpoint sizes for use within your system.
export enum mediaQuerySizes {
    xs = 414,
    s = 768,
    m = 960,
    l = 1040,
    xl = 1440,
    xxl = 1640,
}

// This variable returns an object containing all available media query wrappers for use within styled components
//
// Example Usage:
//
// ${breakpoints.s} {
//   ...css rules
// }
//

export const breakpoints = Object.keys(mediaQuerySizes).reduce(
    (accumulator, breakpoint) => ({
        ...accumulator,
        [breakpoint]: `@media (min-width: ${
            mediaQuerySizes[breakpoint as AvailableBreakpoint]
        }px)`,
    }),
    {} as AvailableBreakpoints
);

export type AvailableBreakpoints = typeof mediaQuerySizes;
export type AvailableBreakpoint = keyof AvailableBreakpoints;

export const appNavBreakpoint = breakpoints.m;
