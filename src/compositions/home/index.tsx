import styled from '@emotion/styled';
import { ReactElement, useState } from 'react';
import { HomePageSeo } from 'src/compositions/home/HomePageSeo';
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
	const [customerEmail, setCustomerEmail] = useState('');

	return (
		<>
			<HomePageSeo />

			<Root>
				<BackgroundVideo />
				<Content>
					<TitleSection setCustomerEmail={email => setCustomerEmail(email)} />
					<OurOfferSection />
					<OurSkillsSections />

					<ProjectsSection />
					<DescribedOfferSection />
					<OpenSourceSection />

					<ContactUsSection email={customerEmail} />
				</Content>
			</Root>
		</>
	);
};

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Home;
