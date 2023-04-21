import { useTranslation } from 'next-i18next';
import PricingImg from 'public/images/svg/DrawKit-onlineshopping-Illustration-16.svg';
import DolarIcon from 'public/images/svg/icons/color/Cash Back.svg';
import CashIcon from 'public/images/svg/icons/color/Cash Machine.svg';
import CashOnDeliveryIcon from 'public/images/svg/icons/color/Cash on Delivey.svg';
import CreditCardIcon from 'public/images/svg/icons/color/Credit Card.svg';
import { ReactElement } from 'react';
import ContentBigImage from 'src/components/contentBigImage';
import H1Title from 'src/components/h1Title';
import ParagraphWithIcons from 'src/components/paragraphWithIcons';
import MainLayout from 'src/layouts/MainLayout';
import { SharedPageSeo } from 'src/seo/SharedPagesSeo';
import { NextPageWithLayout } from 'src/typings/layout';

const PricingPage: NextPageWithLayout = () => {
	const { t } = useTranslation('pricing');
	return (
		<>
			<SharedPageSeo pageName='pricing' />

			<H1Title title={t('h1Title')} />

			<ContentBigImage img={PricingImg} />
			<ParagraphWithIcons
				h2Title={t('h2Title')}
				paragraph={t('textParagraph')}
				icons={[DolarIcon, CashIcon, CashOnDeliveryIcon, CreditCardIcon]}
			/>
		</>
	);
};

PricingPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default PricingPage;
