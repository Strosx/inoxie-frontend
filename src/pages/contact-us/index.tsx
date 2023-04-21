export { default } from 'src/compositions/contact-us/ContactUsPage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['contact-us', 'shared']))
		}
	};
};
