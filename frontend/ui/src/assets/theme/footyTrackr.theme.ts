import {Badge, Button, Checkbox, createTheme, PasswordInput, Select, TextInput} from "@mantine/core";

export const appTheme: any = createTheme({
	fontFamily: 'Roboto, sans-serif',
	fontFamilyMonospace: 'Roboto, sans-serif',
	fontSmoothing: true,
	scale: 0.875,
	autoContrast: true,
	headings: {
		fontFamily: 'Roboto, sans-serif',
		sizes: {
			h1: {fontSize: '2.25rem', lineHeight: '3rem'},
			h2: {fontSize: '1.75rem', lineHeight: '2.5rem'},
			h3: {fontSize: '1.375rem', lineHeight: '2rem'},
			h4: {fontSize: '1.125rem', lineHeight: '1.75rem'},
			h5: {fontSize: '1rem', lineHeight: '1.625rem'},
			h6: {fontSize: '0.875rem', lineHeight: '1.5rem'},
		}
	},
	radius: {xs: '0.25rem', sm: '0.375rem', md: '0.5rem', lg: '0.75rem', xl: '1.5rem'},

	fontSizes: {
		xxs: '0.625rem',
		xs: '0.75rem',
		sm: '0.875rem',
		md: '1rem',
		lg: '1.125rem',
		xl: '1.25rem'
	},

	breakpoints: {
		xs: '31.25rem',
		sm: '48rem',
		md: '62rem',
		lg: '75rem',
		xl: '87.5rem'
	},

	shadows: {
		xs: '0 1px 3px rgba(0, 0, 0, 0.05)',
		sm: '0 3px 6px rgba(0, 0, 0, 0.07)',
		md: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
		lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
		xl: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
	},

	spacing: {
		xs: '0.25rem',
		sm: '0.5rem',
		md: '0.75rem',
		lg: '1.125rem',
		xl: '1.5rem',
		xxl: '2rem'
	},

	primaryColor: 'blue',
	primaryShade: {light: 5, dark: 7},
	colors: {
		neutral: ['#000000', '#f2f8fc', '#9b9b9b', '#ADB7D7', '#B788D5', '#C4CDE5', '', '', '', '', ''],
	}
})