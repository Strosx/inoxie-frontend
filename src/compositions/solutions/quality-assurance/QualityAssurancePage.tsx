import { useTranslation } from 'next-i18next';
import QualityAssuranceImg from 'public/images/svg/DrawKit-onlineshopping-Illustration-12.svg';
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

const QualityAssurancePage: NextPageWithLayout = () => {
	const { t } = useTranslation('quality-assurance');
	return (
		<>
			<SharedPageSeo pageName='quality-assurance' />

			<H1Title title={t('h1Title')} />

			<ContentBigImage img={QualityAssuranceImg} />
			<ParagraphWithIcons
				h2Title={t('h2Title')}
				paragraph={t('paragraph')}
				icons={[BillIcon, AffiliateIcon, AddressIcon, CacheMachineIcon]}
			/>
		</>
	);
};

QualityAssurancePage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default QualityAssurancePage;
