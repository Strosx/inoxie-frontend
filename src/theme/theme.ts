import { Theme } from '@emotion/react';

export const Breakpoints = {
	mobile: 425,
	tablet: 768,
	desktop: 1360
};

export const ThemeStatics = {
	TopHeaderHeight: 48,
	BottomHeaderHeight: 74,
	ContainerMaxWidth: 1366,
}

export const defaultTheme: Theme = {
	colors: {
		primary: {
			default: '#1890ff',
			dark: '#c7c7c7',
			light: '#ffffff'
		},
		secondary: {
			default: '#00e676',
			dark: '#00b248',
			light: '#66ffa6'
		},
		text: {
			default: '#393939',
			dark: 'black',
			light: '#F7F7F7'
		},
		background: {
			slightlyDark: '#f4f4f4'
		}
	},

	breakpoints: {
		mobile: Breakpoints.mobile,
		tablet: Breakpoints.tablet,
		desktop: Breakpoints.desktop
	}
};

/* export interface InoxieTheme {
	colors: {
		primary: ColorScheme;
		secondary: ColorScheme;
	};
} */
/* 
interface ColorScheme {
	light: string;
	dark: string;
	default: string;
	text: string;
}
 */
