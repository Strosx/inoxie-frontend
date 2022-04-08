import styled from '@emotion/styled';
import Head from 'next/head';
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

	width: 1400px;
`;

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Inoxie - We will build you custom software application - Software House</title>
				<meta
					name='description'
					content='We are building custom software applications, sas, modern websites, databases, backend systems,
							VR applications development, IT consulting, Business Design - Inoxie Software House'
				/>
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
