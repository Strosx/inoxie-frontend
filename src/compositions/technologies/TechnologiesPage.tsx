import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import AzureLogo from 'public/images/logos/azure-logo.png';
import DevopsLogo from 'public/images/logos/devops-logo.png';
import ElasticLogo from 'public/images/logos/elastic-logo.svg';
import NetLogo from 'public/images/logos/net-logo.png';
import NextJsLogo from 'public/images/logos/next-js-logo.png';
import ReactLogo from 'public/images/logos/react-logo.png';
import SqlLogo from 'public/images/logos/sql-logo.png';
import UnityLogo from 'public/images/logos/unity-logo.png';
import VercelLogo from 'public/images/logos/vercel-logo.png';
import ZohoLogo from 'public/images/logos/zoho-logo.png';
import TechImg from 'public/images/svg/DrawKit-onlineshopping-Illustration-10.svg';
import { ReactElement } from 'react';
import ContentBigImage from 'src/components/contentBigImage';
import H1Title from 'src/components/h1Title';
import ParagraphWithIcons from 'src/components/paragraphWithIcons';
import MainLayout from 'src/layouts/MainLayout';
import { SharedPageSeo } from 'src/seo/SharedPagesSeo';
import { NextPageWithLayout } from 'src/typings/layout';

const TechnologiesPage: NextPageWithLayout = () => {
	const { t } = useTranslation('technologies');
	return (
		<>
			<SharedPageSeo pageName='technologies' />
			<H1Title title={t('h1Title')} />
			<ContentBigImage img={TechImg} />

			<ParagraphWithIcons
				h2Title={t('h2Title')}
				paragraph={t('paragraph')}
				iconsElements={[
					<Image key={NetLogo.src} src={NetLogo} width={120} height={120} alt='dotnet-logo' />,
					<Image key={NextJsLogo.src} src={NextJsLogo} width={120} height={80} alt='next-js-logo' />,
					<Image key={SqlLogo.src} src={SqlLogo} width={120} height={100} alt='sql-logo' />,
					<Image key={AzureLogo.src} src={AzureLogo} width={120} height={70} alt='azure-logo' />,
					<Image key={ReactLogo.src} src={ReactLogo} width={120} height={60} alt='react-logo' />,
					<Image key={UnityLogo.src} src={UnityLogo} width={120} height={60} alt='unity-logo' />,
					<Image key={ZohoLogo.src} src={ZohoLogo} width={120} height={100} alt='zoho-logo' />,
					<Image key={DevopsLogo.src} src={DevopsLogo} width={120} height={50} alt='devops-logo' />,
					<Image key={ElasticLogo.src} src={ElasticLogo} width={120} height={120} alt='elastic-logo' />,
					<Image key={VercelLogo.src} src={VercelLogo} width={120} height={50} alt='vercel-logo' />
				]}
			/>
		</>
	);
};

TechnologiesPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default TechnologiesPage;
