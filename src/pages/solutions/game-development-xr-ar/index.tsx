export { default } from 'src/compositions/solutions/game-development/GameDevelopmentPage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['game-development', 'shared']))
		}
	};
};
