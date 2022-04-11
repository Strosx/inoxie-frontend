import Head from 'next/head';
import { useRouter } from 'next/router';

export const HomePageSeo = (): JSX.Element => {
	const router = useRouter();

	const getUrl = (): string => {
		const asPath = router?.asPath == '/' ? '' : router?.asPath;
		const locale = router?.locale;

		if (locale == 'en-US') {
			return 'https://inoxiesoft.com/' + asPath;
		}

		return 'https://inoxiesoft.com/' + locale + asPath;
	};

	return (
		<>
			<Head>
				<title>InoxieSoft - We will build you custom software - Software House</title>
				<meta
					name='description'
					key='description'
					content='We are building custom software applications, sas, modern websites, databases, backend systems,
							VR applications development, games. Our team provide also IT consulting and Business Design - InoxieSoft Software House - We will build your custom application'
				/>

				<link rel='alternate' hrefLang='en' href='https://inoxiesoft.com/en-US' />
				<link rel='alternate' hrefLang='pl' href='https://inoxiesoft.com/pl-PL' />
				<link rel='canonical' href={getUrl()} />
			</Head>
		</>
	);
};
