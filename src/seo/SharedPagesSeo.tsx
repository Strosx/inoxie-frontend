import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { OrganizationSeo } from 'src/seo/OrganizationSeo';

type Props = {
	pageName: string;
};

export const SharedPageSeo = ({ pageName }: Props): JSX.Element => {
	const { t } = useTranslation(pageName);
	const router = useRouter();

	const getCanonical = useCallback(() => {
		if (router.asPath === '/') {
			if (router.locale === 'en-US') {
				return '';
			}
			return '/' + router.locale;
		} else {
			if (router.locale === 'en-US') {
				return router.asPath;
			}
			return '/' + router.locale + router.asPath;
		}
	}, [router]);

	const getHrefAlternatePage = useCallback(
		(locale: string) => {
			if (locale === 'pl-PL') {
				if (router.asPath === '/') {
					return '/pl-PL';
				} else {
					return '/pl-PL' + router.asPath;
				}
			}

			if (locale == 'en-US') {
				if (router.asPath === '/') {
					return '';
				} else {
					return router.asPath;
				}
			}
		},
		[router]
	);

	return (
		<>
			<Head>
				<title>{t('meta-title')}</title>
				<meta name='description' key='description' content={t('meta-description')} />

				<OrganizationSeo />

				<link rel='alternate' hrefLang='pl-PL' href={`https://www.inoxiesoft.com${getHrefAlternatePage('pl-PL')}`} />
				<link rel='alternate' hrefLang='en-US' href={`https://www.inoxiesoft.com${getHrefAlternatePage('en-US')}`} />
				<link rel='canonical' href={`https://www.inoxiesoft.com${getCanonical()}`} />
			</Head>
		</>
	);
};
