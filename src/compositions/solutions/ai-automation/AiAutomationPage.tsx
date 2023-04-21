import { useTranslation } from 'next-i18next';
import AiAutomationImg from 'public/images/svg/DrawKit-onlineshopping-Illustration-11.svg';
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

const AiAutomationPage: NextPageWithLayout = () => {
	const { t } = useTranslation('ai-automation');
	return (
		<>
			<SharedPageSeo pageName='ai-automation' />

			<H1Title title={t('h1Title')} />

			<ContentBigImage img={AiAutomationImg} />
			<ParagraphWithIcons
				h2Title={t('h2Title')}
				paragraph={t('paragraph')}
				icons={[DolarIcon, CashIcon, CashOnDeliveryIcon, CreditCardIcon]}
			/>
		</>
	);
};

AiAutomationPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default AiAutomationPage;
