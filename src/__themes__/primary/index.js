import palette from './palette';
import { actions, backgrounds, elevation, inputs, logo, typography } from './ui';

export const theme = {
	palette: {
		...palette,
	},

	ui: {
		actions: {
			...actions,
		},
		backgrounds: {
			...backgrounds,
		},
		elevation: {
			...elevation,
		},
		inputs: {
			...inputs,
		},
		logo: {
			...logo,
		},
		typography: {
			...typography,
		},
	},
};
