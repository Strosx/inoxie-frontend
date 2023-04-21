import { ThemeProvider } from '@emotion/react';
import 'antd/dist/reset.css';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { defaultTheme } from 'src/theme/theme';
import { AppPropsWithLayout } from '../typings/layout';
import '/src/styles/globals.css'; // Add this line

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? (page => page);
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	/* 	if (typeof window !== 'undefined') {
		window.onload = () => {
			if (document.getElementById('holderStyle')) {
				document.getElementById('holderStyle').remove();
			}
		};
	} */

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
			{/* 			<style
				id='holderStyle'
				dangerouslySetInnerHTML={{
					__html: `
                    *, *::before, *::after {
                        transition: none!important;
                    }
                    `
				}}
			/> */}
			{/* 			<div style={{ visibility: !mounted ? 'hidden' : 'visible' }}>
			 */}
			<ThemeProvider theme={defaultTheme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
			{/* 			</div>
			 */}
		</>
	);
}

export default appWithTranslation(MyApp);
