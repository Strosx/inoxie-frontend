export { default } from 'src/compositions/career/CareerPage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['career', 'shared']))
		}
	};
};
