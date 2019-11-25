import palette from './palette';
import { backgrounds, buttons, inputs, logo, typography } from './ui';

export const theme = {
	palette: {
		...palette,
	},

	ui: {
		backgrounds: {
			...backgrounds,
		},
		buttons: {
			...buttons,
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
