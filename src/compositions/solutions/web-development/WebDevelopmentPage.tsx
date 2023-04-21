import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import ElasticLogo from 'public/images/logos/elastic-logo.svg';
import NetLogo from 'public/images/logos/net-logo.png';
import NextJsLogo from 'public/images/logos/next-js-logo.png';
import ReactLogo from 'public/images/logos/react-logo.png';
import SqlLogo from 'public/images/logos/sql-logo.png';
import WebDevelopmentImg from 'public/images/svg/DrawKit-onlineshopping-Illustration-15.svg';
import { ReactElement } from 'react';
import ContentBigImage from 'src/components/contentBigImage';
import H1Title from 'src/components/h1Title';
import ParagraphWithIcons from 'src/components/paragraphWithIcons';
import MainLayout from 'src/layouts/MainLayout';
import { SharedPageSeo } from 'src/seo/SharedPagesSeo';
import { NextPageWithLayout } from 'src/typings/layout';
const WebDevelopmentPage: NextPageWithLayout = () => {
	const { t } = useTranslation('web-development');
	return (
		<>
			<SharedPageSeo pageName='web-development' />

			<H1Title title={t('h1Title')} />

			<ContentBigImage img={WebDevelopmentImg} />
			<ParagraphWithIcons
				h2Title={t('h2Title')}
				paragraph={t('paragraph')}
				iconsElements={[
					<Image key={NetLogo.src} src={NetLogo} width={120} height={120} alt='dotnet-logo' />,
					<Image key={NextJsLogo.src} src={NextJsLogo} width={120} height={80} alt='next-js-logo' />,
					<Image key={SqlLogo.src} src={SqlLogo} width={120} height={100} alt='sql-logo' />,
					<Image key={ReactLogo.src} src={ReactLogo} width={120} height={60} alt='react-logo' />,
					<Image key={ElasticLogo.src} src={ElasticLogo} width={120} height={120} alt='elastic-logo' />
				]}
			/>
		</>
	);
};

WebDevelopmentPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default WebDevelopmentPage;
