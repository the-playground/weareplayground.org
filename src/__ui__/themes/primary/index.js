import { grayscale, system } from '../global'
import { primary, secondary, tertiary } from './_palette'
import { ui } from './ui'

export const theme = {

	palette: {

		primary: {
			...primary
		},

		secondary: {
			...secondary
		},

		tertiary: {
			...tertiary
		},

		grayscale: {
			...grayscale
		},

		system:{
			...system
		}

	},

	ui: {
		...ui
	},

}
