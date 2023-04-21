export { default } from 'src/compositions/pricing/PricingPage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['pricing', 'shared']))
		}
	};
};
