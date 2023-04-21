import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import AzureLogo from 'public/images/logos/azure-logo.png';
import DevopsLogo from 'public/images/logos/devops-logo.png';
import ElasticLogo from 'public/images/logos/elastic-logo.svg';
import SqlLogo from 'public/images/logos/sql-logo.png';
import VercelLogo from 'public/images/logos/vercel-logo.png';
import WebDevelopmentImg from 'public/images/svg/DrawKit-onlineshopping-Illustration-15.svg';
import { ReactElement } from 'react';
import ContentBigImage from 'src/components/contentBigImage';
import H1Title from 'src/components/h1Title';
import ParagraphWithIcons from 'src/components/paragraphWithIcons';
import MainLayout from 'src/layouts/MainLayout';
import { SharedPageSeo } from 'src/seo/SharedPagesSeo';
import { NextPageWithLayout } from 'src/typings/layout';

const CloudDevelopmentPage: NextPageWithLayout = () => {
	const { t } = useTranslation('cloud-development');
	return (
		<>
			<SharedPageSeo pageName='cloud-development' />

			<H1Title title={t('h1Title')} />

			<ContentBigImage img={WebDevelopmentImg} />
			<ParagraphWithIcons
				h2Title={t('h2Title')}
				paragraph={t('paragraph')}
				iconsElements={[
					<Image key={SqlLogo.src} src={SqlLogo} width={120} height={100} alt='sql-logo' />,
					<Image key={AzureLogo.src} src={AzureLogo} width={120} height={70} alt='microsoft-azure-logo' />,
					<Image key={DevopsLogo.src} src={DevopsLogo} width={120} height={50} alt='devops-logo' />,
					<Image key={ElasticLogo.src} src={ElasticLogo} width={120} height={120} alt='elastic-logo' />,
					<Image key={VercelLogo.src} src={VercelLogo} width={120} height={50} alt='vercel-logo' />
				]}
			/>
		</>
	);
};

CloudDevelopmentPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default CloudDevelopmentPage;
