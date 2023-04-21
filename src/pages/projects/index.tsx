export { default } from 'src/compositions/projects/ProjectsPage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['projects', 'shared']))
		}
	};
};
