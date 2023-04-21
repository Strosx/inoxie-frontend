import { useTranslation } from 'next-i18next';
import CareerImage from 'public/images/svg/DrawKit-onlineshopping-Illustration-15.svg';
import PhoneIcon from 'public/images/svg/icons/color/24 Hour Support.svg';
import BillIcon from 'public/images/svg/icons/color/Bill.svg';
import CashBackIcon from 'public/images/svg/icons/color/Cash Back.svg';
import CouponIcon from 'public/images/svg/icons/color/Coupon.svg';
import { ReactElement } from 'react';
import ContentBigImage from 'src/components/contentBigImage';
import H1Title from 'src/components/h1Title';
import ParagraphWithIcons from 'src/components/paragraphWithIcons';
import MainLayout from 'src/layouts/MainLayout';
import { SharedPageSeo } from 'src/seo/SharedPagesSeo';
import { NextPageWithLayout } from 'src/typings/layout';

const CareerPage: NextPageWithLayout = () => {
	const { t } = useTranslation('career');

	return (
		<>
			<SharedPageSeo pageName='career' />
			<H1Title title={t('h1Title')} />

			<ContentBigImage img={CareerImage} />

			<ParagraphWithIcons h2Title={t('h2Title')} paragraph={t('paragraph')} icons={[PhoneIcon, CashBackIcon, BillIcon, CouponIcon]} />
		</>
	);
};

CareerPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default CareerPage;
