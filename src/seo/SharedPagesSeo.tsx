import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { OrganizationSeo } from 'src/seo/OrganizationSeo';

type Props = {
	pageName: string;
};

export const SharedPageSeo = ({ pageName }: Props): JSX.Element => {
	const { t } = useTranslation(pageName);

	return (
		<>
			<Head>
				<title>{t('meta-title')}</title>
				<meta name='description' key='description' content={t('meta-description')} />

				<OrganizationSeo />

				<link rel='alternate' hrefLang='pl' href={`https://www.inoxiesoft.com/pl-PL/${pageName}`} />
				<link rel='alternate' hrefLang='en' href={`https://www.inoxiesoft.com/${pageName}`} />
				<link rel='canonical' href={`https://www.inoxiesoft.com/${pageName}`} />
			</Head>
		</>
	);
};
