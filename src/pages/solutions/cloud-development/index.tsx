export { default } from 'src/compositions/solutions/cloud-development/CloudDevelopmentPage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['cloud-development', 'shared']))
		}
	};
};
