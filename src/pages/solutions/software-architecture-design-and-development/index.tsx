export { default } from 'src/compositions/solutions/software-architecture/SoftwareArchitecturePage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['software-architecture', 'shared']))
		}
	};
};
