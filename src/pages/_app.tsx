import { ThemeProvider } from '@emotion/react';
import Head from 'next/head';
import { defaultTheme } from 'src/theme/theme';
import { AppPropsWithLayout } from '../typings/layout';
import { appWithTranslation } from 'next-i18next';
import '/src/styles/antd.less'; // Add this line
import '/src/styles/globals.css'; // Add this line
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? (page => page);

	return (
		<>
			<Head>
				<link rel='icon' href='/logo-small.png' />
			</Head>
			<Script strategy='beforeInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-FWNTMF94FW' />

			<Script id='ga-analytics'>
				{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
					
						gtag('config', 'G-FWNTMF94FW');		
					`}
			</Script>

			<ThemeProvider theme={defaultTheme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
		</>
	);
}

export default appWithTranslation(MyApp);
