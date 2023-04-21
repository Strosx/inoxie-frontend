import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { ContactUsSection } from 'src/compositions/home/sections/ContactUsSection';
import { DescribedOfferSection } from 'src/compositions/home/sections/DescribedOfferSection';
import { OpenSourceSection } from 'src/compositions/home/sections/OpenSourceSection';
import { OurOfferSection } from 'src/compositions/home/sections/OurOfferSection';
import { OurSkillsSections } from 'src/compositions/home/sections/OurSkillsSection';
import { ProjectsSection } from 'src/compositions/home/sections/ProjectsSection';
import MainLayout from 'src/layouts/MainLayout';
import { SharedPageSeo } from 'src/seo/SharedPagesSeo';
import { NextPageWithLayout } from 'src/typings/layout';

const Root = styled.div`
	display: flex;
	justify-content: center;
`;

const Content = styled.div`
	position: relative;
	z-index: 1;

	display: flex;
	flex-direction: column;
	align-items: center;

	max-width: 1400px;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		max-width: 100vw;
	}
`;

const Home: NextPageWithLayout = () => {
	return (
		<>
			<SharedPageSeo pageName='home' />

			<Root>
				<Content>
					<OurOfferSection />

					<DescribedOfferSection />
					<OurSkillsSections />
					<ProjectsSection title='Portfolio' />
					<OpenSourceSection />
					<ContactUsSection email={''} />
				</Content>
			</Root>
		</>
	);
};

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Home;
