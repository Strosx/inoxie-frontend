import styled from '@emotion/styled';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { BackgroundVideo } from 'src/compositions/home/sections/BackgroundVideo';
import { ContactUsSection } from 'src/compositions/home/sections/ContactUsSection';
import { DescribedOfferSection } from 'src/compositions/home/sections/DescribedOfferSection';
import { OpenSourceSection } from 'src/compositions/home/sections/OpenSourceSection';
import { OurOfferSection } from 'src/compositions/home/sections/OurOfferSection';
import { OurSkillsSections } from 'src/compositions/home/sections/OurSkillsSection';
import { ProjectsSection } from 'src/compositions/home/sections/ProjectsSection';
import { TitleSection } from 'src/compositions/home/sections/TitleSection';
import MainLayout from 'src/layouts/MainLayout';
import { NextPageWithLayout } from 'src/typings/layout';

const Root = styled.div`
	display: flex;
	justify-content: center;
`;

const Content = styled.div`
	position: relative;
	z-index: 1;

	margin-top: 20vh;

	display: flex;
	flex-direction: column;
	align-items: center;

	max-width: 1400px;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		max-width: 100vw;
	}
`;

const Home: NextPageWithLayout = () => {
	const router = useRouter();

	const getUrl = (): string => {
		const asPath = router?.asPath == '/' ? '' : router?.asPath;
		const locale = router?.locale;

		if (locale == 'en-US') {
			return 'https://inoxiesoft.com/' + asPath;
		}

		return 'https://inoxiesoft.com/' + locale + asPath;
	};

	return (
		<>
			<Head>
				<title>Inoxie Software - We will build you custom software - Software House</title>
				<meta
					name='description'
					key='description'
					content='We are building custom software applications, sas, modern websites, databases, backend systems,
							VR applications development, games. Our team provide also IT consulting and Business Design - Inoxie Software House - We will build your custom application'
				/>

				<link rel='alternate' hrefLang='en' href='https://inoxiesoft.com/en-US' />
				<link rel='alternate' hrefLang='pl' href='https://inoxiesoft.com/pl-PL' />
				<link rel='canonical' href={getUrl()} />
			</Head>
			<Root>
				<BackgroundVideo />
				<Content>
					<TitleSection />
					<OurOfferSection />
					<OurSkillsSections />

					<ProjectsSection />
					<DescribedOfferSection />
					<OpenSourceSection />

					<ContactUsSection />
				</Content>
			</Root>
		</>
	);
};

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Home;
