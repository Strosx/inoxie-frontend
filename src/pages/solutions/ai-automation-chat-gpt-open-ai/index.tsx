export { default } from 'src/compositions/solutions/ai-automation/AiAutomationPage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['ai-automation', 'shared']))
		}
	};
};
