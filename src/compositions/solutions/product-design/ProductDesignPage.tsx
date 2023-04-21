import { useTranslation } from 'next-i18next';
import ProductDesignImg from 'public/images/svg/DrawKit-onlineshopping-Illustration-01.svg';
import AddressIcon from 'public/images/svg/icons/color/Address.svg';
import AffiliateIcon from 'public/images/svg/icons/color/Affiliate.svg';
import BillIcon from 'public/images/svg/icons/color/Bill.svg';
import CacheMachineIcon from 'public/images/svg/icons/color/Cash Machine.svg';
import { ReactElement } from 'react';
import ContentBigImage from 'src/components/contentBigImage';
import H1Title from 'src/components/h1Title';
import ParagraphWithIcons from 'src/components/paragraphWithIcons';
import MainLayout from 'src/layouts/MainLayout';
import { SharedPageSeo } from 'src/seo/SharedPagesSeo';
import { NextPageWithLayout } from 'src/typings/layout';

const ProductDesignPage: NextPageWithLayout = () => {
	const { t } = useTranslation('product-design');
	return (
		<>
			<SharedPageSeo pageName='product-design' />

			<H1Title title={t('h1Title')} />

			<ContentBigImage img={ProductDesignImg} />
			<ParagraphWithIcons
				h2Title={t('h2Title')}
				paragraph={t('paragraph')}
				icons={[BillIcon, AffiliateIcon, AddressIcon, CacheMachineIcon]}
			/>
		</>
	);
};

ProductDesignPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default ProductDesignPage;
