import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { BackgroundVideo } from 'src/compositions/home/BackgroundVideo';
import { OurOfferSection } from 'src/compositions/home/OurOfferSection';
import { OurSkillsSections } from 'src/compositions/home/OurSkillsSection';
import { TitleSection } from 'src/compositions/home/TitleSection';
import MainLayout from 'src/layouts/MainLayout';
import { NextPageWithLayout } from 'src/typings/layout';

const Content = styled.div`
	width: 100%;
	position: relative;
	z-index: 1;

	margin-top: 20vh;

	display: flex;
	flex-direction: column;
	align-items: center;

	> * {
		max-width: 1300px;
	}
`;

const Home: NextPageWithLayout = () => {
	return (
		<>
			<BackgroundVideo />
			<Content>
				<TitleSection />

				<OurOfferSection />

				<OurSkillsSections />
			</Content>
		</>
	);
};

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Home;
