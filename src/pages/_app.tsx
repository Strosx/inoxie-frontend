import { ThemeProvider } from '@emotion/react';
import Head from 'next/head';
import { defaultTheme } from 'src/theme/theme';
import { AppPropsWithLayout } from '../typings/layout';
import Favicon from 'public/favicon.svg';
import '/src/styles/antd.less'; // Add this line
import '/src/styles/globals.css'; // Add this line

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? (page => page);

	return (
		<>
			<Head>
				<link rel='icon' href='/logo-small.png' />
			</Head>

			<ThemeProvider theme={defaultTheme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
		</>
	);
}
