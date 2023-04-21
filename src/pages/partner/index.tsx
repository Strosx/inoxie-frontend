export { default } from 'src/compositions/partner/PartnerPage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['partner', 'shared']))
		}
	};
};
