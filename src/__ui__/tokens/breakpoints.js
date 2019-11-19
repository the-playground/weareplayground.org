// These are all the breakpoint sizes for use within your system.
// We currently use pixel values, but ems work too.

export const sizes = {
	xs: '414px',
	s: '768px',
	m: '960px',
	l: '1040px',
	xl: '1440px',
	xxl: '1640px',
};

// This variable returns an object containing all available media query wrappers for use within styled components
//
// Example Usage:
//
// ${mediaQueries.sm} {
//   ...css rules
// }
//

const breakpoints = Object.keys(sizes).reduce(
	(acc, bp) => ({
		...acc,
		[bp]: `@media (min-width: ${sizes[bp]})`,
	}),
	{}
);

export default breakpoints;
