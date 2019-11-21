import { primary, secondary, tertiary, black, white } from './palette';
import { buttons, inputs, logo, typography } from './ui';

export const theme = {
	palette: {
		primary: {
			...primary,
		},

		secondary: {
			...secondary,
		},

		tertiary: {
			...tertiary,
		},

		black,
		white,
	},

	ui: {
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
