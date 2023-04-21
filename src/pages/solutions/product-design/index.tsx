export { default } from 'src/compositions/solutions/product-design/ProductDesignPage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['product-design', 'shared']))
		}
	};
};
