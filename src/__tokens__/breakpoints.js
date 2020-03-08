// These are all the breakpoint sizes for use within your system.
export const mediaQuerySizes = {
    xs: `414px`,
    s: `768px`,
    m: `960px`,
    l: `1040px`,
    xl: `1440px`,
    xxl: `1640px`,
};

// This variable returns an object containing all available media query wrappers for use within styled components
//
// Example Usage:
//
// ${breakpoints.s} {
//   ...css rules
// }
//

const breakpoints = Object.keys(mediaQuerySizes).reduce(
    (acc, bp) => ({
        ...acc,
        [bp]: `@media (min-width: ${mediaQuerySizes[bp]})`,
    }),
    {}
);

export default breakpoints;
