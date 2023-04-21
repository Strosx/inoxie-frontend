import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import NetLogo from 'public/images/logos/net-logo.png';
import SqlLogo from 'public/images/logos/sql-logo.png';
import UnityLogo from 'public/images/logos/unity-logo.png';
import GameDevelopmentImg from 'public/images/svg/DrawKit-onlineshopping-Illustration-06.svg';
import { ReactElement } from 'react';
import ContentBigImage from 'src/components/contentBigImage';
import H1Title from 'src/components/h1Title';
import ParagraphWithIcons from 'src/components/paragraphWithIcons';
import MainLayout from 'src/layouts/MainLayout';
import { SharedPageSeo } from 'src/seo/SharedPagesSeo';
import { NextPageWithLayout } from 'src/typings/layout';

const GameDevelopmentPage: NextPageWithLayout = () => {
	const { t } = useTranslation('game-development');
	return (
		<>
			<SharedPageSeo pageName='game-development' />

			<H1Title title={t('h1Title')} />

			<ContentBigImage img={GameDevelopmentImg} />
			<ParagraphWithIcons
				h2Title={t('h2Title')}
				paragraph={t('paragraph')}
				iconsElements={[
					<Image key={UnityLogo.src} src={UnityLogo} width={120} height={60} alt='unity-logo' />,
					<Image key={NetLogo.src} src={NetLogo} width={120} height={120} alt='dotnet-logo' />,
					<Image key={SqlLogo.src} src={SqlLogo} width={120} height={100} alt='sql-logo' />
				]}
			/>
		</>
	);
};

GameDevelopmentPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default GameDevelopmentPage;
