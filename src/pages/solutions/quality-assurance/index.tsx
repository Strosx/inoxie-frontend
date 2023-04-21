export { default } from 'src/compositions/solutions/quality-assurance/QualityAssurancePage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['quality-assurance', 'shared']))
		}
	};
};
