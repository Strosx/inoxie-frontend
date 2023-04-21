export { default } from 'src/compositions/solutions/web-development/WebDevelopmentPage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['web-development', 'shared']))
		}
	};
};
