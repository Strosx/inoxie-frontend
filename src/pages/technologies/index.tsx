export { default } from 'src/compositions/technologies/TechnologiesPage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['technologies', 'shared']))
		}
	};
};
