import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { BackgroundVideo } from 'src/compositions/home/sections/BackgroundVideo';
import { OurOfferSection } from 'src/compositions/home/sections/OurOfferSection';
import { OurSkillsSections } from 'src/compositions/home/sections/OurSkillsSection';
import { ProjectsSection } from 'src/compositions/home/sections/ProjectsSection';
import { TitleSection } from 'src/compositions/home/sections/TitleSection';
import MainLayout from 'src/layouts/MainLayout';
import { NextPageWithLayout } from 'src/typings/layout';

const Content = styled.div`
	position: relative;
	z-index: 1;

	margin-top: 20vh;

	display: flex;
	flex-direction: column;
	align-items: center;

	width: 1300px;
`;

const Home: NextPageWithLayout = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<BackgroundVideo />
			<Content>
				<TitleSection />

				<OurOfferSection />

				<OurSkillsSections />

				<ProjectsSection />
			</Content>
		</div>
	);
};

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Home;
