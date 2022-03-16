import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from 'src/theme/theme';
import { AppPropsWithLayout } from '../typings/layout';
import '/src/styles/antd.less'; // Add this line
import '/src/styles/globals.css'; // Add this line

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? (page => page);

	return <ThemeProvider theme={defaultTheme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>;
}
