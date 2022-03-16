import { InoxieTheme } from 'src/theme/theme';

declare module '@emotion/react' {
	interface Theme extends InoxieTheme {
		colors: {
			primary: {
				light: string;
				dark: string;
				default: string;
			};
			secondary: {
				light: string;
				dark: string;
				default: string;
			};
            text: {
                default: string;
                light: string;
                dark: string;
            }
		};
	}
}
